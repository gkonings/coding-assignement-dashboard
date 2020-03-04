import React from 'react';
import pt from 'prop-types';


const PaymentRow = ({ payment }) => {
  const {
    description, createdAt, status, amount, method,
  } = payment;

  return (
    <li>
      <div>
        {method}
      </div>
      <div>
        {amount.currency}

        {amount.value}
      </div>
      <div>
        {status}
      </div>
      <div>
        {description}
      </div>
      <div>
        {createdAt}
      </div>
    </li>
  );
};

PaymentRow.propTypes = {
  payment: pt.shape({
    amount: pt.shape({
      currency: pt.string,
      value: pt.number,
    }),
    createdAt: pt.string,
    customer: pt.shape({
      id: pt.string,
      name: pt.string,
      company: pt.string,
      // ...
    }),
    description: pt.string,
    id: pt.string,
    method: pt.string,
    status: pt.string,
  }).isRequired,

};

PaymentRow.defaultProps = {
};

export default PaymentRow;
