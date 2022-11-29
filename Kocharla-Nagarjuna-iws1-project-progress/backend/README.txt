Name - Nagarjuna Kocharla

Quick details of week 5 IWS1 51302022 project progress

I made the following progress in week 5 (brief summary): *

All the endpoints for transactions have now been developed and tested now. To get our app running, Neeharika(my group mate) sent me her frontend code built using react and chakra UI. I pulled the code to my project file and ran it. Although the app opened in the local host, after about 5 seconds I was getting the connection pool exhausted error. And I was unable to reload the page or use the add transaction button. After researching online using PostgreSQL documentation I learned that the error is because of the max connections for our database being less. In the docker desktop app using the command line interface, I ran the alter system max_connections=500 SQL command to increase the max connections. After doing this and restarting the database. The error was partially solved, as I was still getting the error occasionally when I was trying to add a transaction. After going through the server.py file, I found the root cause of the error was that connections were not closed after SQL commands. I added conn. close() to all API endpoints before the return function, and relaunched the app, the error is now fixed.


the endpoints were tested using Insomnia API Tester

All the backend code i have been developing as part of iws group project is in server.py and backend_logic.py and sql_commands.py. And the database file is docker_compose.yaml


GitHub link to one thing I am most proud of that I accomplished this week: Why are you most proud of this?

https://github.com/NagarjunaKocharla/5130f2022/blob/main/Kocharla-Nagarjuna-iws1-project-progress/backend/server.py

I am proud of finally completing writing a bug-free backend or server-side code so that my group mates Neeharika and Sahithi can add it to their frontend code and run the app without any errors. I am proud because, initially after writing code for each API endpoint, it seemed like they would run hassle-free but adding the frontend code and running the app was not smooth and I was met with errors, While the logic of the code was good, it was basic database issues that were causing issues, and finding the root cause of these issues and solving them was challenging but fun.






