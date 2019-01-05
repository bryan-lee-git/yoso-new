module.exports = function(sequelize, DataTypes) {
  var ListItem = sequelize.define("ListItem", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    unitSize: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return ListItem;
};
