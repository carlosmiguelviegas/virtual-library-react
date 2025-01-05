import { Fragment, useState, useEffect } from "react";
import { createPortal } from 'react-dom';

import api from "../../utils/api";
import UserCard from '../../components/cards/user-card/UserCard';
import Loading from '../../components/spinner/loading/Loading';
import styles from './Users.module.css';
import { ERROR_MESSAGE_TITLE, USERS_PAGE_TITLE } from "../../utils/titles-and-labels";
import Paginator from "../../components/layout/paginator/Paginator";
import NotificationsDialog from '../../components/dialogs/notifications-dialog/NotificationsDialog';

const GET_USERS_URL = '/users';
const DISABLE_USER_URL = '/users/disable';

const initialUsersState = { users: [], totalElements: 0 };
const initialPageEventState = { pageIndex: 1, pageSize: 4 };

const Users = () => {

  const [ state, setState ] = useState(initialUsersState);
  const [ showModal, setShowModal ] = useState(false);
  const [ error, setError, ] = useState('');
  const [ pageEvent, setPageEvent ] = useState(initialPageEventState);

  useEffect(() => {

    const { pageIndex, pageSize } = pageEvent;

    const onGetAllActiveUsers = async() => {
  
      try {
        const response = await api.get(`${GET_USERS_URL}?page=${pageIndex}&limit=${pageSize}`);
        const usersList = response['data']['usersList'];
        setState({ users: [ ...usersList ], totalElements: response['data']['total'] });
      } catch (err) {
        console.log(err);
      }

    }

    onGetAllActiveUsers();
  
  }, [pageEvent]);

  const onDisableUser = userId => {

    api.patch(`${DISABLE_USER_URL}/${userId}`)
    .then(() => setState(state => { return { ...state, users: state['users'].filter(user => user['_id'] !== userId) }}))
    .catch(err => {
      setShowModal(true);
      setError(err['response']['data']['errors'][0]['message']);
      }
    );

  }

  const usersListToDisplay = state['users'].map(user => <UserCard key={user['_id']} user={user} onDisableUser={onDisableUser} />);

  return !usersListToDisplay.length ? <Loading /> : (
    <Fragment>
      <section>
        <h1 className={styles.title}>{USERS_PAGE_TITLE}</h1>
        <hr className={styles.divider} />
        <section className={styles.usersContainer}>
          {usersListToDisplay}
        </section>
      </section>
      <Paginator pageEvent={pageEvent} totalElements={state['totalElements']} pageEventChangeHandler={setPageEvent} />
      {showModal && createPortal(<NotificationsDialog title={ERROR_MESSAGE_TITLE} message={error} onClose={setShowModal} />, document.body)}
    </Fragment>
  );
};

export default Users;
