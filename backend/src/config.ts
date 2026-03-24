export const { JWT_SECRET = 'JWT_SECRET' } = process.env;
export const DB_ADDRESS = process.env.NODE_ENV === 'production'
  ? process.env.DB_ADDRESS || 'mongodb://localhost:27017/mestodb'
  : 'mongodb://localhost:27017/mestodb-dev';
