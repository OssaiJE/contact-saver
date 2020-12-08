import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				type: "personal",
				id: 1,
				name: "wifyyy love",
				email: "wiffyyy@gmail.com",
				phone: "9898767363636",
			},
			{
				type: "professional",
				id: 2,
				name: "Husby for life",
				email: "husby@gmail.com",
				phone: "94740980887",
			},
			{
				type: "personal",
				id: 3,
				name: "Lambert Nnadi",
				email: "lambert@gmail.com",
				phone: "373939300",
			},
			{
				type: "professional",
				id: 4,
				name: "Ebube Ozil",
				email: "ebube@gmail.com",
				phone: "73839902829",
			},
		],
		current: null,
	};

	const [state, dispatch] = useReducer(ContactReducer, initialState);

	// ADD CONTACT
	const addContact = (contact) => {
		contact.id = uuid();
		dispatch({
			type: ADD_CONTACT,
			payload: contact,
		});
	};

	// DELETE CONTACT
	const deleteContact = (id) => {
		dispatch({
			type: DELETE_CONTACT,
			payload: id,
		});
	};

	// UPDATE CONTACT
	const updateContact = (contact) => {
		dispatch({
			type: UPDATE_CONTACT,
			payload: contact,
		});
	};

	// READ | SET CURRENT CONTACT
	const setCurrent = (contact) => {
		dispatch({
			type: SET_CURRENT,
			payload: contact,
		});
	};

	// CLEAR CURRENT CONTACT
	const clearCurrent = () => {
		dispatch({
			type: CLEAR_CURRENT,
		});
	};

	// FILTER CONTACT

	// CLEAR FILTER

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
