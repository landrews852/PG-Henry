const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('products', {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
      },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    img: {
        type: DataTypes.STRING,
        allowNull: false
    },

    time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
        
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
        
    size: {
        type: DataTypes.STRING(1),
        allowNull: false
    },

    comments: {
        type: DataTypes.STRING,
    },
  })
};