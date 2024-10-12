# Projects

Project Name -- KBC-Quiz-Game

Overview: The KBC-Quiz-Game is an interactive web-based quiz application inspired by the popular Indian television game show "Kaun Banega Crorepati." Players can join the game using their mobile devices, answer questions, and receive feedback in real-time.

Technologies Used:
Node.js
Express.js
Socket.IO
QR Code Generation
HTML, CSS, and JavaScript


Steps to Complete the Project:

1. Set Up the Project Environment:
     ---  Installed Node.js and initialized a new project using npm init.
     ---  Installed required packages: express, socket.io, and qrcode.

2. Develop the Server:
      --- Created a server.js file to set up an Express server and handle WebSocket connections using Socket.IO.
      --- Defined an array of quiz questions and answers.

3. Generate QR Code:
      --- Implemented a route (/qrcode) to generate a QR code linking to the player interface (player.html).

4. Build the Player Interface:
     --- Created an HTML file (player.html) for the player interface, allowing players to enter their names and select answers to questions.
     --- Added JavaScript to handle real-time communication with the server using Socket.IO.

5. Handle Game Logic:
      --- Managed the flow of the game by sending questions to players and processing their answers.
      --- Provided feedback for correct and incorrect answers, and transitioned to the next question or ended the game appropriately.

6. Styling the Application:
      --- Styled the HTML pages using CSS to enhance the user experience.

7. Test the Application:
    --- Tested the game functionality by running the server and joining the game using multiple devices.
    --- Ensured that the QR code displayed correctly and players could answer questions in real-time.

8. Deploy to GitHub:
     --- Created a GitHub repository named Projects.
     --- Pushed all project files to the repository for version control and sharing.


Conclusion
This project demonstrates my ability to build a collaborative web application using modern web technologies, manage real-time interactions, and create a user-friendly interface. The KBC-Quiz-Game is a fun and engaging way to test knowledge and interact with others.
