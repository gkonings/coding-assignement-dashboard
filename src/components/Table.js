import React from 'react';
import pt from 'prop-types';

import Box from 'components/Box';
import PaymentRow from 'components/PaymentRow';
import styles from './Table.module.scss';

const Table = ({ payments }) => {
  if (!payments.length) {
    return null;
  }

  console.log({ payments });


  return (
    <Box noPadding>
      <div className={styles.table}>
        {payments.map((payment) => <PaymentRow payment={payment} key={payment.id} />)}
      </div>
    </Box>
  );
};

Table.propTypes = {
  payments: pt.arrayOf(pt.shape({})),
};

Table.defaultProps = {
  payments: [],
};

export default Table;
