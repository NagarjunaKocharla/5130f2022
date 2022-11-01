import requests;
from collections  import defaultdict
from datetime import datetime
from psycopg2 import pool
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

# from logic import BOUGHT, SOLD
# from logic import format_db_row_to_transaction



postgreSQL_pool = pool.SimpleConnectionPool(
    1,20,database="cryptodb", user="docker", password="docker", host="127.0.0.1"
)

app = Flask(__name__)
cors = CORS(app)

app.config['postgreSQL_pool'] = postgreSQL_pool

@app.route("/")
def health_check():
    return "I am healthy!!"


app.run(debug=True, port=5000)
