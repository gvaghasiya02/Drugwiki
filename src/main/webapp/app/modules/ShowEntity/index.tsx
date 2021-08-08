import React from 'react';
import { Switch } from 'react-router-dom';
import PageNotFound from 'app/shared/error/page-not-found';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import BrandShower from './Brand/BrandShower';
import Company from './Company';
import Brand from './Brand';
import Generics from './Generics';
import Ingredients from './Ingredients';
const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}/brand`} component={Brand} />
      <ErrorBoundaryRoute path={`${match.url}/company`} component={Company} />
      <ErrorBoundaryRoute path={`${match.url}/generics`} component={Generics} />
      <ErrorBoundaryRoute path={`${match.url}/ingredients`} component={Ingredients} />
      <ErrorBoundaryRoute component={PageNotFound} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
