import React from 'react';
import pt from 'prop-types';

import { ReactComponent as IconIdeal } from 'assets/icons/ideal.svg';
import { ReactComponent as IconCreditCard } from 'assets/icons/creditcard.svg';
import { ReactComponent as IconPaypal } from 'assets/icons/paypal.svg';

const PaymentMethodIcon = ({ id }) => {
  switch (id) {
    case 'ideal':
      return <IconIdeal />;
    case 'creditcard':
      return <IconCreditCard />;
    case 'paypal':
      return <IconPaypal />;
    default:
      return null;
  }
};

PaymentMethodIcon.propTypes = {
  id: pt.string.isRequired,
};

export default PaymentMethodIcon;
