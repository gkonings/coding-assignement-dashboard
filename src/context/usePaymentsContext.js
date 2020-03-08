import { useState } from 'react';
import { fetchPayments } from 'services/api';

export const defaultPaymentsContext = [{
  getPayments: async () => [],
  data: [],
  status: null,
}];

const usePaymentsContext = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [data, setData] = useState();
  const [status, setStatus] = useState();

  const getNewPayments = async () => {
    setStatus('loading');
    try {
      const result = await fetchPayments();
      setTimestamp(new Date());
      setData(result);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const getPayments = async () => {
    // nothing loaded yet?
    if (!data) {
      getNewPayments();
      return;
    }

    // old results still fresh?
    const currentTime = new Date();
    const differenceMs = Math.abs(currentTime - timestamp);

    if ((differenceMs / 1000) / 60 > 2) { // Ms to minutes
      getNewPayments();
    }
  };

  return { getPayments, data, status };
};

export default usePaymentsContext;
