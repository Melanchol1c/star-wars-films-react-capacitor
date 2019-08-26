import { LoginPage, RegistrationPage } from './pages';
import AuthLayout from '../../layouts/AuthLayout';

export default [
  {
    path: '/login',
    component: LoginPage,
    meta: {
      layout: AuthLayout,
    },
  },
  {
    path: '/register',
    component: RegistrationPage,
    meta: {
      layout: AuthLayout,
    },
  },
];
