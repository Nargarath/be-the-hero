import knex from 'knex';
import * as configuration from '../../knexfile';

export const connection = knex(configuration);