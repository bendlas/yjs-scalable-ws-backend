import knex from './knex.js';

export const create = async () => {
  if (!(await knex.schema.hasTable('items'))) {
    await knex.schema.createTable('items', (t) => {
      t.bigIncrements('id');
      t.text('docname').index();
      t.binary('update');
    });
    console.log('table created')
    return true;
  } else {
    return false;
  }
}

export const drop = async () => {
  if (await knex.schema.hasTable('items')) {
    await knex.schema.dropTable('items');
    console.log('table dropped')
    return true;
  } else {
    return false;
  }
}

export const recreate = async () => {
    await drop();
    await create()
}

if (import.meta.url === `file://${process.argv[1]}`) {
    (process.argv[2] === "--force" ? recreate() : create())
        .then(() => knex.destroy());
}
