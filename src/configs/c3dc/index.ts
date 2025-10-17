import { upperfooter, lowerfooter } from './footer';
import type { ProjectConfig } from '../typings/project';

export const c3dcConfig: ProjectConfig = {
  name: 'c3dc',
  displayName: 'Childhood Cancer Clinical Data Commons',

  footer: {
    upper: upperfooter,
    lower: lowerfooter,
  },

  routes: [
    { path: '/', component: 'Home', label: 'Home', inNav: true },
    { path: '/about', component: 'About', label: 'About', inNav: true },
  ],
};
