# TicketAssignAPI
The project is a test API which assigns tickets to authenticated user in Round Robin fashion.
<br>
### Implementation<br>
The API uses a Circular Queue to assign tickets . The queue consists of all the users who have signed up to the API and whose
records are saved in the database. Each time a new user signs-up to the service , its record is created and it is saved in the
database as well as the Circular Queue .<br><br>
Each time a new ticket is created , it contains information like ```ticket description``` and user who  ```raised``` the ticket.
Then the controller calls the Circular Queue instance to return the current head value i.e the user and also move the head to next 
user in the queue.You can learn more about Round Robin Principle <a href="https://www.techtarget.com/whatis/definition/round-robin#:~:text=A%20round%20robin%20is%20an,is%20about%20%22taking%20turns.%22">here</a>
<br>
### Development Setup <br>
Before setting up the project make sure you have Node.js installed on your system with a package manager of your choice . I 
recommend NPM or Yarn.
1. Fork The repository
2. Clone the repository<br>
```git clone https://github.com/<Your_User_Name>/TicketAssignAPI.git```<br>
3. Go into the directory containing the project.
4. Install all the dependencies <br>
```npm i``` or ```npm install ```
5. Start the server <br>
```npm start```<br>
6. The server will start at localhost:4000<br>
### Features<br>
1. Ticket Assignment using Round Robin Principle
2. User data stored in cloud database.
3. User Sign-up/Sign-in and logout features added.
4. A global exception handler is added to look for exceptions.
5. Password is stored safely using hashing.<br>
### Routes<br>
1. ```/``` : This is the default home route.
2. ```/api/v1/users``` : Gives the list of all the users on the service.
3. ```/api/v1/signup``` : Signup route that requires username and password in request body.
4. ```/api/v1/singin``` : Signin route that requires username and password in request body.
5. ```/api/v1/logout``` : Logs out the current user.
6. ```/api/v1/ticket/all``` : Returns all the tickets raised . It is a protected route i.e only authenticated users can access this.
7. ```/api/v1/ticket/create``` : A protected route that generates ticket .  Requires ticket description (desc) as input in request.body
8. ```/api/v1/ticket/:id``` : A protected route that accepts ticket ID as request parameter and returns the ticket with same ID in the response.
   
