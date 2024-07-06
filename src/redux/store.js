import { configureStore, createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
  {
    name: 'Terri Kub PhD',
    number: '892-965-3893',
    id: '1',
  },
  {
    name: 'Francis Roberts',
    number: '962-444-7368',
    id: '2',
  },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
