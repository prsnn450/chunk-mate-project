import { Pool } from 'pg';
import { Sequelize } from 'sequelize';

const pool = new Pool({
    user: 'chunkmate_user',
    host: 'localhost',
    database: 'chunkmate',
    password: 'yourpassword',
    port: 5432,
    ssl:false,
});

// Add Sequelize instance
export const sequelize = new Sequelize(
    'chunkmate',
    'chunkmate_user',
    'yourpassword',
    {
        host: 'localhost',
        dialect: 'postgres',
        logging: false,
        ssl:false,
    }
);

export const query = (text: string, params?: any[]) => {
    return pool.query(text, params);
};

export const getClient = async () => {
    const client = await pool.connect();
    return client;
};

export const releaseClient = (client: any) => {
    client.release();
};

export default pool;