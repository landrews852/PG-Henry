const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('size_price', {

    id_size: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },

    id_product: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

    size: {
      type: DataTypes.STRING,
      allowNull: false
    },

    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

  })
};