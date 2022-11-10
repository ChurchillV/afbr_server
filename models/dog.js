const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dog', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image_url: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    breed: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sire: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dog',
        key: 'id'
      }
    },
    dam: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dog',
        key: 'id'
      }
    },
    sex: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    public_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    current_owner: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    place_of_birth: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kennel_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    land_of_standing: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    afbr_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    height: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    num_of_progeny: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image_format: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_registered: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hasBeenPaidFor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    expresspay_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    expresspay_order_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dog',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sire",
        using: "BTREE",
        fields: [
          { name: "sire" },
        ]
      },
      {
        name: "dam",
        using: "BTREE",
        fields: [
          { name: "dam" },
        ]
      },
      {
        name: "user",
        using: "BTREE",
        fields: [
          { name: "user" },
        ]
      },
    ]
  });
};
