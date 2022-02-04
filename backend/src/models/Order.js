const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('order', {
    
    id_order: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true,
        
      },

      id_custo: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false
      },

      id_product: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false
      },

      img: {
        type: DataTypes.TEXT
      },

    shipment_address: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    filling_flavor: {
      type: DataTypes.STRING,
        allowNull: false
    },

    date: {
        type: DataTypes.DATE,  /* fecha y hora  */
        allowNull: false,
    },

  })
};