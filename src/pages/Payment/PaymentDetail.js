import React, { useEffect, useContext } from 'react';
import pt from 'prop-types';

import Context from 'context/DashboardContextProvider';
import Icon from 'components/Icon';
import NotFound from 'pages/NotFound';
import Details from './PaymentDetail/Details';
import Header from './PaymentDetail/Header';
import Refunds from './PaymentDetail/Refunds';
import styles from './PaymentDetail.module.scss';

const PaymentDetail = ({ match }) => {
  const { payments } = useContext(Context);
  const { getPayments, data, status } = payments;
  const { params: { id } } = match;

  useEffect(() => {
    getPayments();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === 'error') {
    return <NotFound />;
  }

  if (!status || status === 'loading') {
    return <Icon id="spinner" className={styles.spinner} />;
  }

  const payment = data && data.find((p) => p.id === id);

  if (status === 'success' && !payment) {
    return <NotFound />;
  }

  return (
    <>
      <Header {...payment} />
      <Details payment={payment} />
      <Refunds customerId={id} />
    </>
  );
};

PaymentDetail.propTypes = {
  match: pt.shape({
    params: pt.shape({
      id: pt.string,
    }),
  }).isRequired,

};

export default PaymentDetail;
