import React from 'react';
import pt from 'prop-types';

import Modal from 'components/Modal';
import styles from './CustomerModal.module.scss';

const CustomerModal = ({ customer, ...rest }) => (
  <Modal {...rest}>
    <div className={styles.customer}>
      <figure className={styles.image}>
        <img src={customer.picture.large} alt="" />
      </figure>
      <h1 className={styles.name}>{customer.name}</h1>
      <p className={styles.company}>{customer.company}</p>
      <p>
        <a href={`mailto:${customer.email}`}>Contact customer</a>
      </p>
    </div>
  </Modal>
);

CustomerModal.propTypes = {
  customer: pt.shape({
    picture: pt.shape({
      large: pt.string.isRequired,
    }),
    name: pt.string.isRequired,
    company: pt.string.isRequired,
    email: pt.string.isRequired,
  }).isRequired,
};

export default CustomerModal;
