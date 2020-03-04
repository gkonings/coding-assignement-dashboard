import React from 'react';
import pt from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import NotFound from 'pages/NotFound';
import PaymentDetail from './Payment/PaymentDetail';
import PaymentOverview from './Payment/PaymentOverview';

const Payments = ({ match }) => (
  <Switch>
    <Route path={match.path} exact component={PaymentOverview} />
    <Route path={`${match.path}/:id`} exact component={PaymentDetail} />
    <Route path="*" component={NotFound} />
  </Switch>
);

Payments.propTypes = {
  match: pt.shape({
    path: pt.string,
  }).isRequired,
};

export default Payments;
