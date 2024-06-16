import { DataSource } from 'typeorm';
import { Test1718544614009 } from '../migrations/1718544614009-test';

export const KYFDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  database: 'knowyourflag',
  entities: [],
  migrations: [Test1718544614009],
});
