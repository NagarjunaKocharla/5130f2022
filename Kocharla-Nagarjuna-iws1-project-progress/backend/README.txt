Name - Nagarjuna Kocharla

Quick details of this week IWS1 51302022 project progress

I made the following progress this week (brief summary): *

After setting up the database infrastructure last week using docker compose and PostgreSQL. We have starting developing the initial phase of our web app. After discussing with my group members, I have decided to build the backend infrastructure of the app. While we would be cross functional and work on all aspects of the app, for now I started with backend. As mentioned in the project proposal, we would be using the flask framework for the server-side code. After referring to the flask and PostgreSQL documentation for syntax. I wrote two API end points in the server-side code.

1.	Add Transaction: - this is a POST endpoint, so it would be responsible for adding a crypto transaction made, the user will be able to enter the crypto name, symbol, value in USD, purchase price and the transaction would be saved in the PostgreSQL db.
2.	Get Transaction: - this is a GET endpoint, so it would allow users to see their added transactions.
Both the newly created endpoints were tested using Insomnia API tester. 

Server.py was modified with 2 endpoints added and backend_logic.py was created and added


GitHub link to one thing I am most proud of that I accomplished this week: Why are you most proud of this?

https://github.com/NagarjunaKocharla/5130f2022/blob/main/Kocharla-Nagarjuna-iws1-project-progress/backend/backend_logic.py

The one thing I am most proud of for this week progress is writing the backend_logic.py file for displaying transactions added by the user. Initially I assumed the endpoint for adding and seeing transactions would be easy, but Jsons data format made it challenging. For instance, I had to write a separate piece of code for converting json request entries into database transactions and in doing so had to plug and play with different types of datetime objects to see what works, after trying isoformat, timestamp and other formats I went with strptime and later formatted the added timestamp using strftime.
Another thing I am proud of is that we made progress in selecting a machine learning model for our portfolio analysis feature, we had a meeting to discuss the pros and cons of regression models, we shortlisted two algorithms to choose from, Long-Short term memory and random Forrest regression. Sahithi, my groupmate is testing both models on sample data for bitcoin to measure the accuracy.
