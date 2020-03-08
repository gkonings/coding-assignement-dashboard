import React from 'react';

import styles from './PaymentRow.module.scss';

const PaymentRowHeader = () => (
  <li className={styles.listItemHeader}>
    <div className={styles.header} />
    <div className={styles.header}>
      Amount
    </div>
    <div className={styles.header}>
      Status
    </div>
    <div className={styles.header}>
      Details
    </div>
    <div className={styles.header}>
      Date
    </div>
  </li>
);

export default PaymentRowHeader;
