const User = require('./User');
const Exercise = require('./Exercise')

User.hasMany(Exercise, {
    foreignKey: 'author_id',
    onDelete: 'CASCADE'
  });
  
Exercise.belongsTo(User, {
    foreignKey: 'author_id'
  });

module.exports = { User, Exercise };