import requests;
from collections  import defaultdict
from datetime import datetime
from psycopg2 import pool
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

from backend_logic import convert_entry_to_transaction

# from logic import BOUGHT, SOLD




postgreSQL_pool = pool.SimpleConnectionPool(
    1,20,database="cryptodb", user="docker", password="docker", host="127.0.0.1"
)

app = Flask(__name__)
cors = CORS(app)

app.config['postgreSQL_pool'] = postgreSQL_pool

@app.route("/")
def health_check():
    return "DataBase is up and running!!"

@app.route("/transactions", methods=["POST"])
def add_transaction():
    name = request.json["name"]
    symbol = request.json["symbol"]
    value_usd = float(request.json["value_usd"])
    purchased_price = float(request.json["purchased_price"])
    date = datetime.strptime(request.json["date"], "%Y-%m-%d-%H:%M")
   # date = datetime.fromtimestamp(request.json["date"])
   
 #   date_json = request.json["date_iso"]

    coins = float(request.json["coins"])

    conn = postgreSQL_pool.getconn()
    cur = conn.cursor()

    add_transaction = f"INSERT INTO transactions (name, symbol, value_usd, purchased_price, date, coins) VALUES ('{name}', '{symbol}', {value_usd}, {purchased_price}, '{date}', {coins}) RETURNING *"
    cur.execute(add_transaction)
    conn.commit()

    return jsonify(request.json)

@app.route("/transactions", methods=["GET"])
@cross_origin()
def get_transaction():
    conn = postgreSQL_pool.getconn()
    cur = conn.cursor()

    cur.execute("SELECT * FROM transactions")
    entry = cur.fetchall()

    transactions = defaultdict(list)
    for entry in entry:
        transactions[entry[1]].append(convert_entry_to_transaction(entry))

    return jsonify(transactions)




app.run(debug=True, port=5000)





