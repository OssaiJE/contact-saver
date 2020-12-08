import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from "../types";

const contactReducer = (state, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, action.payload],
			};
		// case DELETE_CONTACT:
		// 	return {
		// 		...state,
		// 		users: action.payload,
		// 		loading: false,
		// 	};
		// case SET_CURRENT:
		// 	return {
		// 		...state,
		// 		users: [],
		// 		loading: false,
		// 	};
		// case CLEAR_CURRENT:
		// 	return {
		// 		...state,
		// 		user: action.payload,
		// 		loading: false,
		// 	};
		// case UPDATE_CONTACT:
		// 	return {
		// 		...state,
		// 		repos: action.payload,
		// 		loading: false,
		// 	};
		// case FILTER_CONTACTS:
		// 	return {
		// 		...state,
		// 		loading: true,
		// 	};
		// case CLEAR_FILTER:
		// 	return {
		// 		...state,
		// 		loading: true,
		// 	};
		// default:
		// 	return state;
	}
};

export default contactReducer;
