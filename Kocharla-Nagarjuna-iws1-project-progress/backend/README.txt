Name - Nagarjuna Kocharla

Quick details of this week IWS1 51302022 project progress

Since this is week 1 of our project, development, we as a team decided to start our process by researching about the tech stack of the app i.e front-end, backend, Machine Learning, and data scraping aspect. I decided to research and design the database for our application as a part of this week’s work. I started off by watching online tutorial on docker and docker compose. And using the docker hub documentation (https://hub.docker.com/_/postgres), wrote a docker compose file to build a PostgreSQL database, named it cryptodb. The docker compose file and server.py files have been added to the GitHub directory for iws1 project process.


The reason I am super happy and proud with my progress is because out the errors I had to resolve to build the database. Docker and its services were made to be compatible for Linux, but I use a windows laptop for development which made building the database complicated, I tried to use WSL/Windows subsystem for Linux but it was too slow and I had to move back and forth between WSL and my local terminal. I had to convert the docker compose file format to something the windows file system would accept. This involved finding the right FS mount point and mounting the database on a docker volume (volumes in docker makes data persistent).