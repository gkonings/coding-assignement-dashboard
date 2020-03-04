import React from 'react';
import pt from 'prop-types';
import ReactModal from 'react-modal';

import styles from './Modal.module.scss';

ReactModal.setAppElement(document.getElementById('root'));

const Modal = ({ children, onClose, ...rest }) => (
  <ReactModal
    {...rest}
    className={styles.modal}
    overlayClassName={styles.overlay}
  >
    <div className={styles.modalBody}>{children}</div>
    <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close">
      Close
    </button>
  </ReactModal>
);

Modal.propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]).isRequired,
  onClose: pt.func.isRequired,
};

export default Modal;
