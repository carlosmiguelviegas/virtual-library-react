import { Fragment } from 'react';

import styles from './NotificationsDialog.module.css';
import { NOTIFICATIONS_NO_LABEL, NOTIFICATIONS_OK_LABEL, NOTIFICATIONS_YES_LABEL } from '../../utils/titles-and-labels';

const NotificationsDialog = ({ title, message, displayOneButton = true, onClose, onConfirm }) => {

  return (
    <section className={styles.modalContainer}>
      <h2 className={styles.title}>{title}</h2>
      <section>
        <p className={styles.message}>{message}</p>
      </section>
      <section className={styles.buttonsSection}>
        {displayOneButton && <Button onClick={onClose}>{NOTIFICATIONS_OK_LABEL}</Button>}
        {!displayOneButton && <Fragment>
                                <Button onClick={onConfirm}>{NOTIFICATIONS_YES_LABEL}</Button>
                                <Button func={'secondary'} onClick={onClose}>{NOTIFICATIONS_NO_LABEL}</Button>
                              </Fragment>}
      </section>
    </section>
  );

};

export default NotificationsDialog;
