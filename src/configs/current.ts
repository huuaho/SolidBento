import { c3dcConfig } from './c3dc';
import { gcConfig } from './gc';
import { ccdiHubConfig } from './ccdi-hub';

type ProjectName = 'c3dc' | 'gc' | 'ccdi-hub';

const PROJECT = (import.meta.env.VITE_PROJECT || 'c3dc') as ProjectName;

const configs: Record<ProjectName, typeof c3dcConfig> = {
  'c3dc': c3dcConfig,
  'gc': gcConfig,
  'ccdi-hub': ccdiHubConfig,
};

export const currentConfig = configs[PROJECT];
