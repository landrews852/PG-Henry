const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('user', {

    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    last_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    birthday: { /* A REVISIÓN */
      type: DataTypes.DATE,
      allowNull: false
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
};