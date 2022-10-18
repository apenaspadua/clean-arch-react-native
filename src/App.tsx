import React, { useState, useEffect } from 'react';
import './App.css';
import { useUsersStore } from './store/features'
import { HomePage } from './presentation/pages';

function App() {
  const values = {
    "name": "Marvin",
    "email": "marlon@email.com",
    "phone": "19999876543"
}

  const setAllUsers = useUsersStore(state => state.setAllUsers)
  const addNewUser = useUsersStore(state => state.addNewUser)

  const users = useUsersStore(state => state.users)

  console.log("===users", users)




  return (
    <div className="App">
      <button onClick={() => addNewUser(values)}>Add new user</button>
      <HomePage />
    </div>
  );
}

export default App;
