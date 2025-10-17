import { upperfooter, lowerfooter } from './footer';
import type { ProjectConfig } from '../typings/project';

export const gcConfig: ProjectConfig = {
  name: 'gc',
  displayName: 'General Commons',

  footer: {
    upper: upperfooter,
    lower: lowerfooter,
  },

  routes: [
    { path: '/', component: 'Home', label: 'Home', inNav: true },
    { path: '/about', component: 'About', label: 'About', inNav: true },
  ],
};
