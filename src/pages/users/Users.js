import { useState, useEffect } from "react";

import api from "../../utils/api";
import UserCard from '../../components/cards/UserCard';
import Loading from './../../components/spinner/Loading';
import styles from './Users.module.css';
import { USERS_PAGE_TITLE } from "../../utils/titles-and-labels";

const GET_USERS_URL = '/users';
const DISABLE_USER_URL = '/users/disable';

const Users = () => {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {

    const onGetAllActiveUsers = async() => {
  
      try {
        const response = await api.get(GET_USERS_URL);
        const usersList = response['data']['usersList'];
        const totalElements = response['data']['total'];
        setUsers(users => users.concat([ ...usersList ]));
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
    <section>
      <h1 className={styles.title}>{USERS_PAGE_TITLE}</h1>
      <hr className={styles.divider} />
      <section className={styles.usersContainer}>
        {usersListToDisplay}
      </section>
    </section>
  );
};

export default Users;
