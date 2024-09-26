import { useState, useEffect } from "react";

import api from "../../utils/api";
import UsersItem from "./UsersItem";
import styles from './Users.module.css';

const GET_USERS_URL = '/users';

const Users = () => {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {

    async function onGetAllActiveUsers() {
  
      try {
        const response = await api.get(GET_USERS_URL);
        const usersList = response['data'];
        setUsers((users) =>  users.concat([ ...usersList ] ));
      } catch (err) {
        console.log(err);
      }

    }

    onGetAllActiveUsers();
  
  }, []);
  const usersListToDisplay = users.map(user => <UsersItem key={user['_id']} user={user} />);

  return (
    <section className={styles.usersContainer}>
      {usersListToDisplay}
    </section>
  );
};

export default Users;
