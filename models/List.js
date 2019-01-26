module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define("List", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    }
  });
  return List;
};
