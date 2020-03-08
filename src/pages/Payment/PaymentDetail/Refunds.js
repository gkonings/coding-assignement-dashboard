import React, { useContext, useEffect } from 'react';
import pt from 'prop-types';

import Context from 'context/DashboardContextProvider';
import List from 'components/List';

const Refunds = ({ customerId }) => {
  const { refunds } = useContext(Context);
  const { getRefunds, data, status } = refunds;

  useEffect(() => {
    getRefunds(customerId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data || !data.length) {
    return null;
  }

  return (
    <>
      <h2>Refunds</h2>
      <List payments={data} status={status} />
    </>
  );
};

Refunds.propTypes = {
  customerId: pt.string.isRequired,
};


export default Refunds;
