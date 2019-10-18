import React from "react";
import store from "../store";
import Header from "../components/Header";
import Chats from "../components/Chats";
import './ChatWindow.css'
import _ from "lodash";
import MessageInput from "../containers/MessageInput";

const ChatWindow = ({ activeUserId }) => {
const state = store.getState();
const { typing } = state;

const activeUser = state.contacts.contacts[activeUserId];
const activeMsgs = state.messages[activeUserId];

console.log("activeUser");
console.log(activeUser);
  return (

  <div className="ChatWindow">
    <Header user={activeUser} />
    <Chats messages={_.values(activeMsgs)}/>
    <MessageInput value={typing} />
  </div>
  );
};
export default ChatWindow;
