import { upperfooter, lowerfooter } from './footer';
import { c3dcRoutes, c3dcNavigation } from './routes';
import type { ProjectConfig } from '../typings/project';

export const c3dcConfig: ProjectConfig = {
  name: 'c3dc',
  displayName: 'Childhood Cancer Clinical Data Commons',

  footer: {
    upper: upperfooter,
    lower: lowerfooter,
  },

  routeElements: c3dcRoutes,
  navigation: c3dcNavigation,
};
