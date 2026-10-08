import * as migration_20261008_142013_initial from './20261008_142013_initial';

export const migrations = [
  {
    up: migration_20261008_142013_initial.up,
    down: migration_20261008_142013_initial.down,
    name: '20261008_142013_initial'
  },
];
