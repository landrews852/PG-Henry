const { DataTypes, FLOAT } = require('sequelize');

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
        type: DataTypes.STRING,
        allowNull: false
    },

    time: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false
    },

    size_S: {
      type: FLOAT,
      allowNull: false,
    },
    size_M: {
      type: FLOAT,
      allowNull: false,
    },
    size_L: {
      type: FLOAT,
      allowNull: false,
    },
  }, {timestamps: false},  // PARA NO AGREGAR  updated_at/created_at
  );
};