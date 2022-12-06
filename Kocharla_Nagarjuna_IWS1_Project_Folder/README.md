## 5130of2022 IWS1 Project

# DCrypt-A-CryptoCurrency-Tracking-and-Visualization-Application

Note - please go to backend, and run the backend code, following the steps to run in readme under backend directory first before running the frontend for the app to connect to the database properly, thank you

Changes made between the project submission on Friday Dec 02 2022 and Dec 06 2022

1. As mentioned in my report, i have now completed adding an endpoint for getting predictions, the LSTM model was built by my group mate sahithi. The endpoint takes bitcoin data as input gives it to the LSTM model and forcasts bitcoin market outlook into the future(Untill 100 days from now)
2. The forcast can now be accessed via forecast button in the frontend code
3. Niharika changed the background color for the porfolio analysis button

## Steps to run/build app

## Steps to run backend/server code
To run the backend code successfully, please make sure docker desktop is installed link - https://www.docker.com/products/docker-desktop/ is avaiable in your computer and also check if docker is installed link - https://docs.docker.com/desktop/install/windows-install/.

Once, this is done please do to backend directory and run docker compose up -d

Now in the backend directory, please run python server.py

The backend code should be up and running

## Steps to run the frontend
Please go to the frontend directory and run npm start,it'll get start in locahost or open http://localhost:3000 to view it in your browser.

npm start
The app can be deployed to production using the command npn run build, but for testing npm start is sufficient

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


