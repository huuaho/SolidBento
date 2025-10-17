import { c3dcConfig } from './c3dc';
import { gcConfig } from './gc';
import { ccdiHubConfig } from './ccdi-hub';

const PROJECT = import.meta.env.VITE_PROJECT || 'c3dc';

const configs = {
  'c3dc': c3dcConfig,
  'gc': gcConfig,
  'ccdi-hub': ccdiHubConfig,
};

export const currentConfig = configs[PROJECT];
