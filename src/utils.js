/* eslint-disable default-case */
// eslint-disable-next-line import/prefer-default-export
export const getPaymentMethodName = (id) => {
  switch (id) {
    case 'ideal':
      return 'iDEAL';
    case 'creditcard':
      return 'Credit card';
    case 'paypal':
      return 'Paypal';
    default:
      return null;
  }
};
