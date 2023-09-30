import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filters;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filters) => {
    return (
      contacts.filter(contact =>
        contact.name.toLowerCase().trim().includes(filters.toLowerCase())
      ) || contacts
    );
  }
);
