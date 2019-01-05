module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define("Purchase", {
    unitSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    expiration: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30]
      }
    },
    unitPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    },

    location: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 75]
      }
    },
    ordinal: {
      type: DataTypes.INTEGER
    }
  });
  // Purchase.associate = function (models) {
  //     Purchase.belongsTo(models.User, {
  //         foreignKey: {
  //             allowNull: true
  //         }
  //     });
  // };
  return Purchase;
};
