import { useState, useEffect } from "react";

import api from "../../utils/api";
import UserCard from '../../components/cards/UserCard';
import Loading from './../../components/spinner/Loading';
import styles from './Users.module.css';

const GET_USERS_URL = '/users';
const DISABLE_USER_URL = '/users/disable';

const Users = () => {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {

    const onGetAllActiveUsers = async() => {
  
      try {
        const response = await api.get(GET_USERS_URL);
        const usersList = response['data'];
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
    <section className={styles.usersContainer}>
      {usersListToDisplay}
    </section>
  );
};

export default Users;
