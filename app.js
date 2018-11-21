const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: "Welcome to the api"
    })
})

app.post('/api/post', verifyToken, (req, res) => {
    res.json({
        message: "Post created"
    })
})

app.post('/api/login', (req, res) => {
    // Mock user
    const user = {
        id: 1, 
        username: 'vanmanh',
        email: 'vanmanh@gmail.com'
    }

    jwt.sign({ user:user }, 'secret-key', function(err, token) {
        res.json({
            token: token
        })
    });
})

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        
    } else {
        // Forbidden
        res.sendStatus(403)
    }
}

app.listen(5000, () => console.log("Server started on port 5000"));