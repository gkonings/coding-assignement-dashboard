import React, { createContext } from 'react';
import pt from 'prop-types';

import usePaymentsContext, { defaultPaymentsContext } from './usePaymentsContext';
import useRefundsContext, { defaultRefundsContext } from './useRefundsContext';

const DashboardContext = createContext({
  payments: { ...defaultPaymentsContext },
  refunds: { ...defaultRefundsContext },
});

export const DashboardContextProvider = ({ children }) => {
  const value = {
    payments: { ...usePaymentsContext() },
    refunds: { ...useRefundsContext() },
  };

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

DashboardContextProvider.propTypes = {
  children: pt.oneOfType([pt.node, pt.arrayOf(pt.node)]).isRequired,
};

export default DashboardContext;
