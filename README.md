# UserSpecific-LeaderBoard


# Ninja Greeting Server 🥷

A fun Node.js server that greets users with a ninja animation.  
The server listens on host, protocol, and port defined in the `.env` file.

---

## 🚀 Features
- Reads **HOST**, **PORT**, and **PROTOCOL** from `.env`
- Displays a ninja animation on the homepage
- Takes a username as input
- Greets the user "from the ninja's side" with a bowing animation

---

## 📦 Installation
Clone this repo and install dependencies:

    install.sh

## ⚙️ Setup
### Create a .env file in the root directory:

    HOST=localhost
    PORT=3000
    PROTOCOL=http

### Start the server:

    node server.js

### 🌐 Usage
Open your browser and visit:

    http://localhost:3000

You’ll see a ninja animation with an input box.
Enter your name and click Greet Me.
The ninja bows and greets you personally!

## 🛠 Dependencies

    express
    dotenv

## 📷 Preview
Homepage:
🥷 Ninja bouncing + name input

## Greeting Page:
🥷 Ninja bows + "The Ninja greets you, <your name>!"
