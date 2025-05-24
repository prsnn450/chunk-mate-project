import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db';

class Reference extends Model {}

Reference.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  documentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'documents',
      key: 'id',
    },
  },
  chunkNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Reference',
  tableName: 'document_references',
  timestamps: true,
});

export default Reference;