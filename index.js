const express = require('express');
const sequelize = require('./src/db/dbConnection');
const { User, Post, Comment } = require('./src/db/models/models');

const app = express();
app.use(express.json());

sequelize.sync({ alter: true })
    .then(() => console.log("Database connected and synced."))
    .catch((err) => console.log("Sync error:", err));

app.post('/users/signup', async (req, res) => {
    try {
        const user = User.build(req.body); 
        await user.save();
        res.status(201).json({ message: "User added successfully." });
    } catch (error) {
        res.status(400).json({ message: error.message || "Email already exists." });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));