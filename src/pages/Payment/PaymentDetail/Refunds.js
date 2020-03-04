import React from 'react';
import pt from 'prop-types';

import Table from 'components/Table';

const Refunds = ({ refunds }) => {
  if (!refunds.length) {
    return null;
  }

  return (
    <>
      <h2>Refunds</h2>
      <Table />
    </>
  );
};

Refunds.propTypes = {
  refunds: pt.arrayOf(pt.shape({})),
};

Refunds.defaultProps = {
  refunds: [],
};

export default Refunds;
