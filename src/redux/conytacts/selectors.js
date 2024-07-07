import { createSelector } from '@reduxjs/toolkit';
import { selecFilter } from '../filter/selectors';

export const selectContacts = state => state.contacts.items;

export const selectIsLoadingFech = state => state.contacts.isLoadingFech;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selecFilter],
  (contacts, filter) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
);
