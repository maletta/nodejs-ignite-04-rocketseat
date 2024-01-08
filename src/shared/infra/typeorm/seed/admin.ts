import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import { AppDataSource } from '../data-source';

async function create() {
  return AppDataSource.initialize().then(async (dataSource) => {
    const id = uuidV4();
    const password = await hash('admin', 12);

    const result =
      await dataSource.query(`INSERT INTO USERS(id, name, email, driver_license, password, "isAdmin", created_at)
    values ('${id}', 'admin', 'admin@email.com', 'KKK-123', '${password}', true, now())
  `);

    await dataSource.destroy();
    return result;
  });
}

create()
  .then(() => console.log('User admin created by seed'))
  .catch(() => console.log('Failed on create user admin by seed'));
