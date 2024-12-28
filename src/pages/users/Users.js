import { Fragment, useState, useEffect } from "react";

import api from "../../utils/api";
import UserCard from '../../components/cards/user-card/UserCard';
import Loading from '../../components/spinner/loading/Loading';
import styles from './Users.module.css';
import { USERS_PAGE_TITLE } from "../../utils/titles-and-labels";
import Paginator from "../../components/layout/paginator/Paginator";

const GET_USERS_URL = '/users';
const DISABLE_USER_URL = '/users/disable';

const Users = () => {

  const [ users, setUsers ] = useState([]);
  const [ totalElements, setTotalElements ] = useState([]);
  const [ pageEvent, setPageEvent ] = useState({ pageIndex: 1, pageSize: 4 });

  useEffect(() => {

    const onGetAllActiveUsers = async() => {
  
      try {
        const response = await api.get(GET_USERS_URL);
        const usersList = response['data']['usersList'];
        setUsers(users => users.concat([ ...usersList ]));
        setTotalElements(response['data']['total']);
      } catch (err) {
        console.log(err);
      }

    }

    onGetAllActiveUsers();
  
  }, []);

  const onDisableUser = userId => {

    api.patch(`${DISABLE_USER_URL}/${userId}`)
    .then(() => setUsers(users => users.filter(user => user['_id'] !== userId)))
    .catch(err => console.log(err));

  }

  const usersListToDisplay = users.map(user => <UserCard key={user['_id']} user={user} onDisableUser={onDisableUser} />);

  return !usersListToDisplay.length ? <Loading /> : (
    <Fragment>
      <section>
        <h1 className={styles.title}>{USERS_PAGE_TITLE}</h1>
        <hr className={styles.divider} />
        <section className={styles.usersContainer}>
          {usersListToDisplay}
        </section>
      </section>
      <Paginator pageEvent={pageEvent} totalElements={totalElements} pageEventChangeHandler={setPageEvent} />
    </Fragment>
  );
};

export default Users;
