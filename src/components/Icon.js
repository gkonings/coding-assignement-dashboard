import React from 'react';
import pt from 'prop-types';
import cx from 'classnames';

import { ReactComponent as IconIdeal } from 'assets/icons/ideal.svg';
import { ReactComponent as IconCreditCard } from 'assets/icons/creditcard.svg';
import { ReactComponent as IconPaypal } from 'assets/icons/paypal.svg';
import { ReactComponent as IconSpinner } from 'assets/icons/spinner.svg';
import styles from './Icon.module.scss';

const Icon = ({ id, className }) => {
  switch (id) {
    case 'ideal':
      return <IconIdeal className={className} />;
    case 'creditcard':
      return <IconCreditCard className={className} />;
    case 'paypal':
      return <IconPaypal className={className} />;
    case 'spinner':
      return (
        <IconSpinner className={cx(styles.rotate, className)} />
      );
    default:
      return null;
  }
};

Icon.propTypes = {
  id: pt.string,
  className: pt.string,
};

Icon.defaultProps = {
  id: '',
  className: '',
};

export default Icon;
