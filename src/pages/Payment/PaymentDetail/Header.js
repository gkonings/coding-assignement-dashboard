import React from 'react';
import pt from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = ({ description, amount }) => (
  <>
    <p>
      <Link to="/payments">‹ Overview</Link>
    </p>
    <h1 className={styles.description}>{description}</h1>
    <p className={styles.amount}>
      {amount.currency}
      {amount.value}
    </p>
  </>
);

Header.propTypes = {
  description: pt.string.isRequired,
  amount: pt.shape({
    currency: pt.string,
    value: pt.string,
  }).isRequired,
};

export default Header;
