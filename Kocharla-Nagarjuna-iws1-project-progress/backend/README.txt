Name - Nagarjuna Kocharla

Quick details of week2 IWS1 51302022 project progress

I made the following progress in week 3 (brief summary): *

After creating the post and get api endpoint basic outline last week, i further continued my work on the backend logic. In the POST endpoint for adding transactions, i wrote a function to prevent adding a sell transaction that is worth more in value than the total portfolio of the user. Even if a user is unlikely to make such a mistake it makes sense to have a check in place just in case. I did this by quering the database for the total net value of the porfolio and no of coins. And using an if block, compared the coins and value currently being added using the post endpoint to the total value.

I also wrote another endpoint for getting the details of each cryptocurrency coin coinwise, this get endpoint would give 1. symbol of the coin ETH,BTC,XRP etc 2. Number of coins for any given symbol 3. Total value of the investment into that coin 4. Total Equity of investment into that coin. This endpoint is important to display visualization of the users investments, with interactive piecharts of investment distribution and other graphs.

the two endpoints were tested using Insomnia API Tester

The two endpoints are in server.py file https://github.com/NagarjunaKocharla/5130f2022/blob/main/Kocharla-Nagarjuna-iws1-project-progress/backend/server.py





GitHub link to one thing I am most proud of that I accomplished this week: Why are you most proud of this?

https://github.com/NagarjunaKocharla/5130f2022/blob/main/Kocharla-Nagarjuna-iws1-project-progress/backend/server.py

I am super proud of the two endpoints i wrote for this weeks progress. For the post endpoint, Since this is the first time for me using POSTGRESQL, i struggled initially to connect the json data from the server.py functions to the database using sql queires but as i started to read more about postgres, it all made sense and managed to write the functions, and implement a check to prevent invalid transactions(in the post transaction endpoint)

I am also happy that i am almost done developing the get_coin_details endpoint, as this gives us the information we need to generate visualization of transactions and to start building the portfolio analysis feature for the User.




