require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));

// Serve homepage
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Ninja Greeting</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #111;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
        }
        .ninja {
          width: 100px;
          height: 100px;
          background: black;
          border-radius: 50%;
          position: relative;
          animation: ninja-move 2s infinite alternate;
        }
        .ninja::before, .ninja::after {
          content: '';
          position: absolute;
          top: 30%;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
        }
        .ninja::before {
          left: 20px;
        }
        .ninja::after {
          right: 20px;
        }
        @keyframes ninja-move {
          0% { transform: translateX(-20px) }
          100% { transform: translateX(20px) }
        }
        form {
          margin-top: 30px;
        }
        input {
          padding: 8px;
          border-radius: 5px;
          border: none;
          margin-right: 10px;
        }
        button {
          padding: 8px 12px;
          background: crimson;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <div class="ninja"></div>
      <form method="POST" action="/greet">
        <input type="text" name="username" placeholder="Enter your name" required />
        <button type="submit">Greet Me</button>
      </form>
    </body>
    </html>
  `);
});

// Handle form submission
app.post("/greet", (req, res) => {
  const { username } = req.body;
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Ninja Greeting</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #111;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
        }
        .ninja {
          width: 100px;
          height: 100px;
          background: black;
          border-radius: 50%;
          position: relative;
          animation: ninja-bow 2s infinite alternate;
        }
        .ninja::before, .ninja::after {
          content: '';
          position: absolute;
          top: 30%;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
        }
        .ninja::before {
          left: 20px;
        }
        .ninja::after {
          right: 20px;
        }
        @keyframes ninja-bow {
          0% { transform: scale(1) }
          100% { transform: scale(0.8) translateY(10px) }
        }
        h1 {
          margin-top: 20px;
          color: crimson;
        }
      </style>
    </head>
    <body>
      <div class="ninja"></div>
      <h1>The Ninja greets you, ${username}!</h1>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at ${process.env.PROTOCOL}://${HOST}:${PORT}`);
});
