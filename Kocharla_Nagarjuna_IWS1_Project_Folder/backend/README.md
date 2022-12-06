## I was responsible for writing and testing backend/server side code


## Steps to run backend/server code 

1. Please run pip -r requirements.txt from the backend directory location, to install all backend related libraries

2. In order for the LSTM Deep Leaning model to work, please run python prediction_model.py from the backend directory. This will take about 10 minutes to run and build the model.

3. To save time, i packaged the model in model.pkl and wrote an endpoint in server.py to get predictions of bitcoin, you may directly continue with the below steps(skipping step 2) if need be.

4. To run the backend code successfully, please make sure docker desktop link - https://www.docker.com/products/docker-desktop/ is avaiable in your computer
and docker is installed link - https://docs.docker.com/desktop/install/windows-install/. 

5. If docker installation is a problem, i also hosted our database storage on AWS as a secondary option, for things to run smoothly, my server side code in my project submission connects to aws database instead of docker. But connection to docker is also included in the code, so please free to connect to either (i put the connection to docker container database in comments in the server.py code)

only if using docker -  please do to backend directory and run docker compose up -d

6. Now in the backend directory, please run python server.py

7. The backend code sould be up and running
