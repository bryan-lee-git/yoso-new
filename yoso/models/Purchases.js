module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define("Purchase", {
    unitSize: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        min: 1
      }
    },
    sizeQuantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1
      }
    },
    expiration: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    unitPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  return Purchase;
};
