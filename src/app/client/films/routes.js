import { FilmsPage } from './pages';
import { ClientLayout } from '../../../layouts';

export default [
  {
    path: '/films',
    component: FilmsPage,
    meta: {
      layout: ClientLayout,
      auth: true,
    },
  },
];
