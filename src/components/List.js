/* eslint-disable max-len */
import React from 'react';
import pt from 'prop-types';

import Box from 'components/Box';
import PaymentRowHeader from 'components/PaymentRowHeader';
import PaymentRow from 'components/PaymentRow';
import Icon from 'components/Icon';
import styles from './List.module.scss';

const List = ({ payments, status, navigateToUser }) => {
  if (!payments.length) {
    return null;
  }

  return (
    <Box noPadding>
      {(!status || status === 'loading')
      && <Icon id="spinner" className={styles.spinner} />}
      {status === 'success' && (
      <ul className={styles.list}>
        <PaymentRowHeader />
        {payments.map((payment) => <PaymentRow payment={payment} key={payment.id} navigateToUser={navigateToUser} />)}
      </ul>
      )}

    </Box>
  );
};

List.propTypes = {
  payments: pt.arrayOf(pt.shape({})),
  status: pt.oneOf(['loading', 'success']),
  navigateToUser: pt.bool,
};

List.defaultProps = {
  payments: [],
  status: 'loading',
  navigateToUser: false,
};

export default List;
