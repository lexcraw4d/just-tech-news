const User = require('./User');
const Post = require('./Post');

// create associations referencing post user_id -> which references the user(id)
User.hasMany(Post, {
	foreignKey: 'user_id',
});
Post.belongsTo(User, {
	foreignKey: 'user_id',
});

module.exports = { User, Post };
