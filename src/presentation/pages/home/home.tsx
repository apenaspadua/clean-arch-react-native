import React, { FC, useEffect, useState } from 'react';
import { useUsersStore } from '../../../store/features';
import { UserModel } from '../../../domain/models';
import Spinner from 'react-bootstrap/Spinner'
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { UsersTable } from './components';
import "./home.css";


export const HomePage: FC = () => {
  const users: UserModel[] = useUsersStore(state => state.users);
  const fetchAllUsers = useUsersStore(state => state.setAllUsers);

  useEffect(() => {
    fetchAllUsers();
  }, [])

  return (
    <div style={{ marginTop: "100px" }}>
      <h2>React with typescript + clean architecture + zustand</h2>
      <button onClick={() => fetchAllUsers()}>Fetch</button>
      <br />
      <br />
      <UsersTable users={users} />
    </div>
  )
}
