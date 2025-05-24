import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../db';

// Define the attributes for the Document model
interface DocumentAttributes {
  id: number;
  title: string;
  filepath?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define creation attributes (id, createdAt, updatedAt are optional on creation)
interface DocumentCreationAttributes extends Optional<DocumentAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

// Extend the Model class with the attributes
class Document extends Model<DocumentAttributes, DocumentCreationAttributes> implements DocumentAttributes {
  public id!: number;
  public title!: string;
  public filepath?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Document.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  filepath: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'createdAt',
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updatedAt',
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Document',
  tableName: 'documents',
  timestamps: true,
});

export default Document;