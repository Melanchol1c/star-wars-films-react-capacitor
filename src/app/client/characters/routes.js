import { CharactersPage } from './pages';
import { ClientLayout } from '../../../layouts';

export default [
  {
    path: '/characters',
    component: CharactersPage,
    meta: {
      layout: ClientLayout,
    },
  },
];
