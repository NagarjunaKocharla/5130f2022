Crypto Visualization and Tracking App

Group Members
1. Nagarjuna Kocharla
2. Sahithi Nallani Chakravartula
3. Lakshmi Neeharika Chundury



What we intend to create

Millions all around the world are passively investing in crypto currency without keeping track of their investments. While investing in crypto is a good way to diversity one’s portfolio, it should be done with diligence and the investment portfolio needs to be catalogued. We aim to create a crypto portfolio visualizing and tracker web app where potential investors could enter their transactions and learn about their growth prospect based, on market sentiment and social media interaction.

Important Notes about our idea and design

Along with portfolio tracking, we also aim to build a portfolio analysis for users, where the user can visualize his/her porfolio value 3-4 months in the future. In order to achieve this, we plan to using the power of Machine Learning, possible deep learning (LSTM model) depending on what is more accurate. The features used for the prediction can be exhaustive, but based on our initial analysis, Price, Historic Price, 52 Week Open, 52 Week Close, Coin Mining Volume, Social Media interaction Volume (tweets), Polarity of Social Media Interaction(if a tweet,subreddit is positive or negative) seem ideal, but we may choose to add additional features if needed. The Output in this scenario will be aggregate Coin price during a Specific Period in the future, also possibly close price on any day in the future(of course market sentiment could quickly change on any day and make our predictions inaccurate,we are trying to predict the price analytically, while considering market sentiment as one of the features). This way, the user would have the ability to tweak his investments if he sees that the future value of his investment is not in the green(Positive) or invesment more if this is indeed positive. To optimize the design process, we plan to divide the whole process into various steps i.e Building the backend(where majority of our time would be spent), this also involves building the porfolio analysis end point because we would have to configure a machine learning model in real time. Building the frontend, and data storage using docker compose(have to write a docker compose file to spin-up db). We are in the process of dividing tasks among us equally so everyone has their own contribution and also it would make the build process easier since the app idea and executing time might be substantial.



Our Tech Stack

FrontEnd - React JS with Chakra UI for App side code

BackEnd - Python Flask micro framework for the server side code

Database/Data Storage - PostGresql which is spun up using docker via docker compose

APIs - We will be using Coingecko to retrieve like crpyto currency prices. And for Portfolio analysis we will be using the tweepy API, and possibly reddit API


We added a Lucid Chart to the github directory (title - Crypto-Visualization-and-Tracking-App-Basic-Outline.pdf
) outlining how we want our application to look when a user opens it.

References/ Resources 

1. https://youtu.be/CkcJ9_dpjqw (creating crypto tracking app with binance api)
2. https://youtu.be/K6i02mJc8Zc (building a crypto native app)
3. https://www.geeksforgeeks.org/how-to-build-a-cryptocurrency-tracker-android-app/
4. https://www.tweepy.org/
5. https://youtu.be/YTkDHwn0NB0 (creating crypto visualization app)
6. https://www.lucidchart.com/pages/tour




