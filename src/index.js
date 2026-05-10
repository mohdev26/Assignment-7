const express = require('express');

const sequelize = require('./db/dbConnection'); 

const { User, Post, Comment } = require('./modules/module');

const userRouter = require('./modules/user.module');
const postRouter = require('./modules/post.module');
const commentRouter = require('./modules/comment.module');

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.get('/test', (req, res) => {
    res.status(200).send("Server is working perfectly!");
});

sequelize.sync({ alter: true }) 
    .then(() => {
        console.log("Database synced successfully!");
        const PORT = 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });