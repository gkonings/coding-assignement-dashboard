import React from 'react';
import pt from 'prop-types';
import { Link } from 'react-router-dom';

import { displayCurrency, displayDate } from 'utils';
import Icon from 'components/Icon';
import Label from 'components/Label';
import styles from './PaymentRow.module.scss';

// eslint-disable-next-line react/prop-types
const Wrapper = ({ id, navigateToUser, children }) => (navigateToUser ? <Link to={`/payments/${id}`} className={styles.listItem}>{children}</Link> : <div className={styles.listItem}>{children}</div>);

const PaymentRow = ({ payment, navigateToUser }) => {
  const {
    description, createdAt, status, amount, method, id,
  } = payment;

  return (
    <li>
      <Wrapper id={id} navigateToUser={navigateToUser}>
        <div className={styles.icon}>
          <Icon id={method} />
        </div>
        <div className={styles.amount}>
          {displayCurrency(amount.value, amount.currency)}
        </div>
        <div className={styles.status}>
          <Label>{status}</Label>
        </div>
        <div className={styles.details}>
          {description}
        </div>
        <div className={styles.date}>
          {displayDate(createdAt)}
        </div>
      </Wrapper>
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
    }),
    description: pt.string,
    id: pt.string,
    method: pt.string,
    status: pt.string,
  }).isRequired,
  navigateToUser: pt.bool,
};

PaymentRow.defaultProps = {
  navigateToUser: false,
};

export default PaymentRow;
