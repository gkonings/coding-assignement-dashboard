import React, { useEffect, useContext } from 'react';

import Context from 'context/DashboardContextProvider';
import NotFound from 'pages/NotFound';
import List from 'components/List';

const Overview = () => {
  const { payments } = useContext(Context);
  const { getPayments, data, status } = payments;

  useEffect(() => {
    getPayments();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === 'error') {
    return <NotFound />;
  }

  return (
    <>
      <h1>Payments</h1>
      <List payments={data} status={status} navigateToUser />
    </>
  );
};

export default Overview;
