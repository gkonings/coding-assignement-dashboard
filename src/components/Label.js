import React from 'react';
import pt from 'prop-types';
import cx from 'classnames';

import styles from './Label.module.scss';

const Label = ({ children }) => (
  <span className={cx(styles.label, styles[children])}>
    {children}
  </span>
);

Label.propTypes = {
  children: pt.string.isRequired,
};

export default Label;
