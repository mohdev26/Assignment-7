const express = require('express');

// 1. استدعاء الاتصال بقاعدة البيانات (من فولدر db)
const sequelize = require('./db/dbConnection'); 

// 2. استدعاء الموديلات من ملف module.js (الموجود داخل فولدر modules)
const { User, Post, Comment } = require('./modules/module');

// 3. استدعاء الروترات من فولدر modules
const userRouter = require('./modules/user.module');
const postRouter = require('./modules/post.module');
const commentRouter = require('./modules/comment.module');

const app = express();

// middleware لقراءة بيانات الـ JSON من Postman
app.use(express.json());

// 4. تعريف المسارات (Routes)
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

// رابط اختبار سريع للتأكد أن السيرفر يعمل
app.get('/test', (req, res) => {
    res.status(200).send("Server is working perfectly!");
});

// 5. مزامنة قاعدة البيانات وتشغيل السيرفر
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