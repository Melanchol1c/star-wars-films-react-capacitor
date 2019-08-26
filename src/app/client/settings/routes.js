import { SettingsPage } from './pages';
import { ClientLayout } from '../../../layouts';

export default [
  {
    path: '/settings',
    component: SettingsPage,
    meta: {
      layout: ClientLayout,
      auth: true,
    },
  },
];
