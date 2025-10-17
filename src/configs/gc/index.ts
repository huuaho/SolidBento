import { upperfooter, lowerfooter } from './footer';
import { gcRoutes, gcNavigation } from './routes';
import type { ProjectConfig } from '../typings/project';

export const gcConfig: ProjectConfig = {
  name: 'gc',
  displayName: 'General Commons',

  footer: {
    upper: upperfooter,
    lower: lowerfooter,
  },

  routeElements: gcRoutes,
  navigation: gcNavigation,
};
