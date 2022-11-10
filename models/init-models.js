var DataTypes = require("sequelize").DataTypes;
var _alembic_version = require("./alembic_version");
var _comments = require("./comments");
var _csharpbooks = require("./csharpbooks");
var _dog = require("./dog");
var _posts = require("./posts");
var _users = require("./users");

function initModels(sequelize) {
  var alembic_version = _alembic_version(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var csharpbooks = _csharpbooks(sequelize, DataTypes);
  var dog = _dog(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  comments.belongsTo(comments, { as: "parent", foreignKey: "parent_id"});
  comments.hasMany(comments, { as: "comments", foreignKey: "parent_id"});
  dog.belongsTo(dog, { as: "dam_dog", foreignKey: "dam"});
  dog.hasMany(dog, { as: "dogs", foreignKey: "dam"});
  dog.belongsTo(dog, { as: "sire_dog", foreignKey: "sire"});
  dog.hasMany(dog, { as: "sire_dogs", foreignKey: "sire"});
  comments.belongsTo(posts, { as: "post", foreignKey: "post_id"});
  posts.hasMany(comments, { as: "comments", foreignKey: "post_id"});
  comments.belongsTo(users, { as: "user_user", foreignKey: "user"});
  users.hasMany(comments, { as: "comments", foreignKey: "user"});
  dog.belongsTo(users, { as: "user_user", foreignKey: "user"});
  users.hasMany(dog, { as: "dogs", foreignKey: "user"});
  posts.belongsTo(users, { as: "user_user", foreignKey: "user"});
  users.hasMany(posts, { as: "posts", foreignKey: "user"});

  return {
    alembic_version,
    comments,
    csharpbooks,
    dog,
    posts,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
