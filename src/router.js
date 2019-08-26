import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { router as films } from './app/client/films';
import { router as characters } from './app/client/characters';
import { router as auth } from './app/auth';
import { router as settings } from './app/client/settings';
import PageNotFound from './pages/PageNotFound';
import { DefaultLayout } from './layouts';
import { checkNestedProps, checkEmptyObject } from './helpers';
import useUser from './hooks/useUser';

/** Router component. */
const RootRouter = () => {
  const routes = [...films, ...characters, ...auth, ...settings];

  return (
    <Switch>
      {routes.map((route, index) => {
        // Check for auth requirements for route.
        const requireAuth =
          checkNestedProps(route, 'meta', 'auth') && route.meta.auth;

        // Check for layout requirements for route.
        const layout =
          (checkNestedProps(route, 'meta', 'layout') && route.meta.layout) ||
          DefaultLayout;

        return (
          <RouteOfGodsPower
            exact
            path={route.path}
            layout={layout}
            component={route.component}
            key={index}
            requireAuth={requireAuth}
          />
        );
      })}
      <Redirect exact from="/" to="/films" />
      <Route component={PageNotFound} />
    </Switch>
  );
};

/** Custom route wrapper with cool features. */
const RouteOfGodsPower = ({
  component: Component,
  layout: Layout,
  requireAuth,
  ...rest
}) => {
  const user = useUser();

  return (
    <Route
      {...rest}
      render={props =>
        requireAuth && checkEmptyObject(user) ? (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  );
};
export default RootRouter;
