import { useState } from 'react';
import api from 'services/api';

export const defaultRefundsContext = [
  {
    getRefunds: async () => [],
    data: [],
    status: null,
  },
];

const useRefundsContext = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [customerId, setCustomerId] = useState();
  const [data, setData] = useState();
  const [status, setStatus] = useState();

  const getNewRefunds = async id => {
    setStatus('loading');
    try {
      const result = await api.fetchRefunds(id);
      setTimestamp(new Date());
      setCustomerId(id);
      setData(result);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const getRefunds = async id => {
    // nothing loaded yet?
    if (!data) {
      getNewRefunds(id);
      return;
    }

    // old results still fresh?
    const currentTime = new Date();
    const differenceMs = Math.abs(currentTime - timestamp);

    if (differenceMs / 1000 / 60 > 2) {
      // Ms to minutes
      getNewRefunds(id);
    }

    // other user?
    if (id !== customerId) {
      getNewRefunds(id);
    }
  };

  return { getRefunds, data, status };
};

export default useRefundsContext;
