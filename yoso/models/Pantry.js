module.exports = function(sequelize, DataTypes) {
  var Pantry = sequelize.define("Pantry", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1, 300]
      }
    },
    stock: {
      type: DataTypes.ENUM("OUT", "LOW", "ENOUGH")
    },
    replenish: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    frequency: {
      type: DataTypes.INTEGER
    },
    shelfLife: {
      type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30]
      }
    },
    photo: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 75]
      }
    }
  });
  return Pantry;
};
