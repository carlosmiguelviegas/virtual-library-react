import { useState, useEffect } from "react";
import api from "../../utils/api";

const GET_USERS_URL = '/users';

let usersList = [];

const Users = () => {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {

    async function onGetAllActiveUsers() {
  
      try {
        const response = await api.get(GET_USERS_URL);
        usersList = response['data'];
        setUsers(users => [...users, usersList]); console.log(usersList);
      } catch (err) {
        console.log(err);
      }

    }

    onGetAllActiveUsers();
  
  }, []);

  return (
    <h2>Users</h2>
  );
};

export default Users;
