const express = require('express');
const sequelize = require('./models/dbConnection');

const User = require('./models/user.model');
const Post = require('./models/post.model');
const Comment = require('./models/comment.model');

const app = express();
app.use(express.json());

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

app.put('/users/upsert/:id', async (req, res) => {
    const { id } = req.params;
    await User.upsert({ id, ...req.body }, { validate: false });
    res.json({ message: "User created or updated successfully (Validation Skipped)" });
});

app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body; 
    const deleted = await Post.destroy({ where: { id, userId } });
    deleted ? res.json({ message: "Post deleted successfully" }) : res.status(404).json({ message: "Post not found or unauthorized" });
});

app.post('/users/signup', async (req, res) => {
    try {
        const user = User.build(req.body);
        await user.save();
        res.status(201).json({ message: "User added successfully." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [
                { model: User, attributes: ['name'] },
                { model: Comment, attributes: ['content'] }
            ]
        });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.post('/comments', async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json({ message: "Comment created", comment });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.put('/comments/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { content, userId } = req.body;
        const updated = await Comment.update({ content }, { where: { id, userId } });
        if (updated[0]) res.json({ message: "Comment updated" });
        else res.status(404).json({ message: "Comment not found or unauthorized" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database & Tables Ready!');
        app.listen(3000, () => console.log('Server is running on port 3000'));
    })
    .catch(err => console.error('Sync Error:', err));