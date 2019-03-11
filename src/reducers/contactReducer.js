import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from '../actions/types';

const initialState = {
  contacts: [
    {
      id: 1,
      name: 'john Doe',
      email: 'john@gmail.com',
      phone: '555-555-5555'
    },
    {
      id: 2,
      name: 'Jeff Smith',
      email: 'jeff@gmail.com',
      phone: '666-666-6666'
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
}
