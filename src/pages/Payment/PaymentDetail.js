import React from 'react';
import pt from 'prop-types';

import Details from './PaymentDetail/Details';
import Header from './PaymentDetail/Header';
import Refunds from './PaymentDetail/Refunds';

const PaymentDetail = ({ payment, customer, refunds }) => (
  <>
    <Header {...payment} />
    <Details payment={payment} customer={customer} />
    <Refunds refunds={refunds} />
  </>
);

PaymentDetail.propTypes = {
  payment: pt.shape({}).isRequired,
  customer: pt.shape({}).isRequired,
  refunds: pt.shape({}).isRequired,

};

export default PaymentDetail;
