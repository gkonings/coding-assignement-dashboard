import * as React from 'react';

import Box from 'components/Box';
import styles from './Table.module.scss';

const Table = () => (
  <Box noPadding>
    <div className={styles.table}>
      Please turn me into a table full of data
      <span role="img" aria-label="heart emoji">
        ❤️
      </span>
    </div>
  </Box>
);

export default Table;
