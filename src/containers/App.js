import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import store from '../store'
import _ from 'lodash'

function App() {
  console.log(store.getState());
  const { user, contacts,  activeUserId } = store.getState();
    console.log("dengue")
  console.log(user)
    console.log(contacts)

  return (
    <div  id={9} className="App">
  <Sidebar id={10} contacts={_.values(contacts.contacts)}/>
  <Main  id={11} user={user} activeUserId={activeUserId}/>
  </div>
  );
}

export default App;
