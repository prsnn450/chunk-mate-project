import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db';

class Chunk extends Model {}

Chunk.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  document_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'documents',
      key: 'id',
    },
  },
  chunk_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
  },
}, {
  sequelize,
  modelName: 'Chunk',
  tableName: 'chunks',
  timestamps: false, // no updatedAt
});

export default Chunk;
