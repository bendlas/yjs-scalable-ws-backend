import Knex from 'knex';
import config from './config.js';

const knex = Knex({
  client: 'pg',
  connection: {
    ...("" !== config.db.host && {host: config.db.host}),
    ...("" !== config.db.user && {user: config.db.user}),
    ...("" !== config.db.password && {password: config.db.password}),
    ...("" !== config.db.name && {database: config.db.name})
  }
});

export default knex;
