import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import api from "../../utils/api";
import UserCard from '../../components/cards/user-card/UserCard';
import Loading from '../../components/spinner/loading/Loading';
import styles from './Users.module.css';
import { ERROR_MESSAGE_TITLE, USERS_PAGE_TITLE } from "../../utils/titles-and-labels";
import Paginator from "../../components/layout/paginator/Paginator";
import { disableUser, getActiveUsersList } from "../../store/users/users.action";
import { selectActiveUsersList, selectTotalElements } from "../../store/users/users.selector";
import GeneralDialog from "../../components/dialogs/general-dialog/GeneralDialog";

const GET_USERS_URL = '/users';
const DISABLE_USER_URL = '/users/disable';

const initialModalsState = { showNotifications: false, error: '', message: '' };
const initialPageEventState = { pageIndex: 1, pageSize: 4 };

const Users = () => {

  const activeUsers = useSelector(selectActiveUsersList);
  const totalActieUvsers = useSelector(selectTotalElements);
  const [ modalsState, setModalsState ] = useState(initialModalsState);
  const [ pageEvent, setPageEvent ] = useState(initialPageEventState);
  const dispatch = useDispatch();

  useEffect(() => {

    const { pageIndex, pageSize } = pageEvent;

    const onGetAllActiveUsers = async() => {
  
      try {
        const response = await api.get(`${GET_USERS_URL}?page=${pageIndex}&limit=${pageSize}`);
        const usersList = response['data']['usersList'];
        dispatch(getActiveUsersList({ users: [ ...usersList ], totalElements: response['data']['total'] }));
      } catch (err) {
        console.log(err);
      }

    }

    onGetAllActiveUsers();
  
  }, [pageEvent, dispatch]);

  const onDisableUser = userId => {

    api.patch(`${DISABLE_USER_URL}/${userId}`)
    .then(() => dispatch(disableUser(userId)))
    .catch(err => {
      setShowModal(true);
      setError(err['response']['data']['errors'][0]['message']);
      }
    );

  }

  const usersListToDisplay = activeUsers.map(user => <UserCard key={user['_id']} user={user} onDisableUser={onDisableUser} />);

  return !usersListToDisplay.length ? <Loading /> : (
    <Fragment>
      <section>
        <h1 className={styles.title}>{USERS_PAGE_TITLE}</h1>
        <hr className={styles.divider} />
        <section className={styles.usersContainer}>
          {usersListToDisplay}
        </section>
      </section>
      <Paginator pageEvent={pageEvent} totalElements={totalActieUvsers} pageEventChangeHandler={setPageEvent} />
      <GeneralDialog showModal={showModal} title={ERROR_MESSAGE_TITLE} message={error} onClose={setShowModal} />
    </Fragment>
  );
};

export default Users;
