import user from "./user";
import messages from "./messages";
import contacts from "./contacts";
import typing from "./typing";
import { combineReducers } from "redux";
import activeUserId from "./activeUserId";

export default combineReducers({
user,
messages,
typing,
contacts,
activeUserId
});
