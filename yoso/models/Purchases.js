module.exports = function (sequelize, DataTypes) {
    var Purchase = sequelize.define("Purchase", {
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 30]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 300]
            }
        },
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
        photo: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 75]
            }
        },
        location: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 75]
            }
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