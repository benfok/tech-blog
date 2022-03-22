const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Posts belong to Users
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// Users can have many Posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Comment belong to Users
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// Users can have many Comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Comments belong to Posts
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// Posts can have many Comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

module.exports = { 
    User, 
    Post, 
    Comment 
};
