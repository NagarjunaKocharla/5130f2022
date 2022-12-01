import psycopg2
engine = psycopg2.connect(
    database="postgres",
    user="docker",
    password="docker1234",
    host="cryptodb.cb0o6zu61rpk.us-east-1.rds.amazonaws.com",
    port='5432'
)
cur = engine.cursor()
cur.execute("SELECT * FROM transactions")



engine.commit()
cur.close()





