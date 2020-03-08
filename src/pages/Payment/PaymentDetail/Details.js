import React, { useState } from 'react';
import pt from 'prop-types';

import Icon from 'components/Icon';
import Box from 'components/Box';
import Label from 'components/Label';
import CustomerModal from 'components/CustomerModal';
import { getPaymentMethodName, displayDate } from 'utils';
import styles from './Details.module.scss';

const Details = ({ payment }) => {
  const { customer } = payment;
  const [isOpen, setOpen] = useState(false);


  return (
    <Box>
      <dl className={styles.details}>
        <dt>Created at</dt>
        <dd>
          {displayDate(payment.createdAt)}
        </dd>
        <dt>Status</dt>
        <dd>
          <Label>{payment.status}</Label>
        </dd>
        <dt>Method</dt>
        <dd>
          <Icon id={payment.method} />
          {getPaymentMethodName(payment.method)}
        </dd>
        <dt>Customer</dt>
        <dd>
          {customer.name}
          <button type="button" className={styles.customerLink} onClick={() => setOpen(true)}>
            View details
          </button>
        </dd>
      </dl>
      <CustomerModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        contentLabel={`Details for ${customer.name}`}
        customer={customer}
      />
    </Box>
  );
};

Details.propTypes = {
  payment: pt.shape({
    createdAt: pt.string,
    status: pt.string,
    method: pt.string,
    customer: pt.shape({
      name: pt.string,
    }),
  }).isRequired,
};

export default Details;
