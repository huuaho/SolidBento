import { upperfooter, lowerfooter } from './footer';
import { ccdiHubRoutes, ccdiHubNavigation } from './routes';
import type { ProjectConfig } from '../typings/project';

export const ccdiHubConfig: ProjectConfig = {
  name: 'ccdi-hub',
  displayName: 'CCDI Hub',

  footer: {
    upper: upperfooter,
    lower: lowerfooter,
  },

  routeElements: ccdiHubRoutes,
  navigation: ccdiHubNavigation,
};
