import * as migration_20260728_114406_initial_schema from './20260728_114406_initial_schema';
import * as migration_20260728_135713_product_code_req from './20260728_135713_product_code_req';

export const migrations = [
  {
    up: migration_20260728_114406_initial_schema.up,
    down: migration_20260728_114406_initial_schema.down,
    name: '20260728_114406_initial_schema',
  },
  {
    up: migration_20260728_135713_product_code_req.up,
    down: migration_20260728_135713_product_code_req.down,
    name: '20260728_135713_product_code_req'
  },
];
