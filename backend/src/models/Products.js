const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('products', {
    id_product: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    img: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
  })
};