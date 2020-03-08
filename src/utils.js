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

export const displayCurrency = (value, currency = 'EUR') => `${currency === 'EUR' ? '€ ' : ''}${(Math.round(value * 100) / 100).toFixed(2)}`;

export const displayDate = (dateString) => {
  const date = new Date(dateString);
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} on ${(`0${date.getHours()}`).slice(-2)}:${(`0${date.getMinutes()}`).slice(-2)}`;
};
