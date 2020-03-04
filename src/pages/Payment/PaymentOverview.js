import React, { useEffect, useState } from 'react';

import Table from 'components/Table';
import { getPayments } from 'services/api';

const Overview = () => {
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    const fetchPayments = async () => {
      setPayments(await getPayments());
    };

    fetchPayments();
  }, []);

  return (
    <>
      <h1>Payments</h1>
      <Table payments={payments} />
    </>
  );
};

export default Overview;
