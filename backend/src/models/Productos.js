const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('productos', {
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

    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    descripcion: {
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
        
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
        
    tamaño: {
        type: DataTypes.STRING(1),
        allowNull: false
    },

    comentarios: {
        type: DataTypes.STRING,
    },
  })
};