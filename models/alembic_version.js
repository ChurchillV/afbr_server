const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alembic_version', {
    version_num: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'alembic_version',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "version_num" },
        ]
      },
    ]
  });
};
