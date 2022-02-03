const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('administrator', {
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

    email:{
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  })
};