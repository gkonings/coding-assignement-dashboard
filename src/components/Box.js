import React from 'react';
import pt from 'prop-types';
import cx from 'classnames';

import styles from './Box.module.scss';

const Box = ({ children, noPadding }) => (
  <div className={cx(styles.box, { [styles.noPadding]: noPadding })}>
    {children}
  </div>
);

Box.propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]).isRequired,
  noPadding: pt.bool,
};

Box.defaultProps = {
  noPadding: false,
};

export default Box;
