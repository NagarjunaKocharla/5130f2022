## 5130of2022 IWS1 Project

# DCrypt-A-CryptoCurrency-Tracking-and-Visualization-Application

Note - please go to backend, and run the backend code, following the steps to run in readme under backend directory first before running the frontend for the app to connect to the database properly, thank you

Changes made between the project submission on Friday Dec 02 2022 and Dec 06 2022

1. As mentioned in my report, i have now completed adding an endpoint for getting predictions, the LSTM model was built by my group mate sahithi. The endpoint takes bitcoin data as input gives it to the LSTM model and forcasts bitcoin market outlook into the future(Untill 100 days from now)
2. The forcast can now be accessed via forecast button in the frontend code
3. Niharika changed the background color for the porfolio analysis button

## Steps to run/build app

Steps to run backend/server code

1. Please run pip -r requirements.txt from the backend directory location, to install all backend related libraries

2. In order for the LSTM Deep Leaning model to work, please run python prediction_model.py from the backend directory. This will take about 10 minutes to run and build the model.

3. To save time, i packaged the model in model.pkl and wrote an endpoint in server.py to get predictions of bitcoin, you may directly continue with the below steps(skipping step 2) if need be.

4. To run the backend code successfully, please make sure docker desktop link - https://www.docker.com/products/docker-desktop/ is avaiable in your computer and docker is installed link - https://docs.docker.com/desktop/install/windows-install/.

5. If docker installation is a problem, i also hosted our database storage on AWS as a secondary option, for things to run smoothly, my server side code in my project submission connects to aws database instead of docker. But connection to docker is also included in the code, so please free to connect to either (i put the connection to docker container database in comments in the server.py code)

6. only if using docker - please do to backend directory and run docker compose up -d

7. Now in the backend directory, please run python server.py

The backend code sould be up and running

# Steps to run the project frontend

1. Please go to the frotnend directory, and run "npm install" to install add the needed packages

2. Please go to the frontend directory and run npm start,it'll get start in locahost or open http://localhost:3000 to view it in your browser.
npm start

3. The app can be deployed to production using the command npn run build, but for testing npm start is sufficient

To learn React, check out the React documentation.

Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

# Distribution of work

Group members
1. Nagarjuna Kocharla
2. Sahithi Nallani
3. Niharika Chundury

Nagarjuna Kocharla

I was responsible for writing the backend code for the app, all the code written by me is under backend directory, apart from prediction_model.py, with instructions and comments in the code

Sahithi Nallani 

was responsible for building and testing the LSTM model to predict bitcoin future price, and the code is under backend in prediction_model.py

Niharika Chundury

was responsible for building and testing frontend code for the app, and the code is under frontend


