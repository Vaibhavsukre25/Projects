const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const QRCode = require('qrcode');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "Who is King of Cricket'?",
        options: ["Virat", "MSD", "Sachin", "Rohit"],
        correctAnswer: "Virat"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "What is the boiling point of water?",
        options: ["50°C", "100°C", "75°C", "0°C"],
        correctAnswer: "100°C"
    }
];

let currentQuestionIndex = 0;

app.get('/qrcode', (req, res) => {
    QRCode.toDataURL('http://192.168.1.38:3000/player.html', (err, url) => {
        res.send(`<img src="${url}" alt="QR Code">`);
    });
});


io.on('connection', (socket) => {
    console.log('A player connected');

    
    socket.on('joinGame', ({ playerName }) => {
        socket.join('gameRoom');
        
        socket.emit('newQuestion', questions[currentQuestionIndex]);
    });

   
    socket.on('submitAnswer', (data) => {
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        const isCorrect = data.chosenOption === correctAnswer;

        
        const message = isCorrect
            ? `${data.playerName} answered correctly!`
            : `${data.playerName} answered incorrectly! The correct answer was ${correctAnswer}.`;

        
        io.to('gameRoom').emit('answerFeedback', { message });

        if (isCorrect) {
            io.to('gameRoom').emit('congratulations', { playerName: data.playerName });
            
            
            currentQuestionIndex++;

            
            if (currentQuestionIndex < questions.length) {
                
                socket.emit('nextQuestion', questions[currentQuestionIndex]);
            } else {
                
                io.to('gameRoom').emit('gameOver', { message: `${data.playerName}, you have completed the game!` });
            }
        } else {
            
            socket.emit('gameOver', { message: `${data.playerName}, your game has ended.` });
        }
    });
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
