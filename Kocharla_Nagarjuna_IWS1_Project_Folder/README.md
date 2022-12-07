## 5130of2022 IWS1 Project

# DCrypt-A-CryptoCurrency-Tracking-and-Visualization-Application

# This README file contains the following

1. improvements made between project submission on Dec 02 and Project Show and Tell on Dec 06.
2. steps to run code.
3. distribution of workload.


# Quick Note  
I wrote the IWS Personal Project report and submitted it on Friday Dec 2. And put the latest current progress of our application. I request you to    please refer to the report titled Kocharla_Nagarjuna_IWS1_Personal_Report (link -https://github.com/NagarjunaKocharla/5130f2022/blob/main/Kocharla_Nagarjuna_IWS1_Project_Folder/Kocharla_Nagarjuna_IWS1_Project__Personal_Report.pdf) where i mentioned my role and work in the project, flow/functionality and progress of our application, along with future work, Thank you


#  1. Changes made between the project submission on Friday Dec 02 2022 and Dec 06 2022

1. Sahithi - Improved the already built LSTM model to train on recent data which forcasts bitcoin market outlook from the historic bitcoin data it was run on. Ran the model with different hyperparameters before fixating on one.

2. Nagarjuna - Added the endpoints for getting predictions and integrated the model to the backend server code. Moved the docker code to AWS platform and updated the corresponding backend code.

3. Neeharika - Added a forecast button which displays the graph of future bitcoin prices (with the json data from the new API)and some UI modifications.


# 2. Steps to run/build app

Steps to run backend/server code

1. Please run pip -r requirements.txt from the backend directory location, to install all backend related libraries

2. In order for the LSTM Deep Leaning model to work, please run python prediction_model.py from the backend directory. This will take about 10 minutes to run and build the model.

3. To save time, i packaged the model in model.pkl and wrote an endpoint in server.py to get predictions of bitcoin, you may directly continue with the below steps(skipping step 2) if need be.

4. Optional - To run the backend code successfully, please make sure docker desktop link - https://www.docker.com/products/docker-desktop/ is available in your computer and docker is installed link - https://docs.docker.com/desktop/install/windows-install/.

5. Docker installation can be problematic and might take time, to make the process quick, i also hosted our database storage on AWS as a secondary option, for things to run smoothly, my server side code in my project submission connects to aws database instead of docker. But connection to docker is also included in the code, so please free to connect to either (i put the connection to docker container database in comments in the server.py code)

6. only if using docker - please do to backend directory and run docker compose up -d

7. Now in the backend directory, please run python server.py

The backend code should be up and running

Steps to run the frontend code(has to be done after running backend code)

1. Please go to the frontend directory, and run "npm install" to install add the needed packages

2. Please go to the frontend directory and run npm start,it'll get start in locahost or open http://localhost:3000 to view it in your browser.
npm start

3. The app can be deployed to production using the command npn run build, but for testing npm start is sufficient

To learn React, check out the React documentation.

Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

# 3. Distribution of work

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


