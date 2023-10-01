import { useDispatch, useSelector } from 'react-redux';
import { CiTrash, CiEdit } from 'react-icons/ci';

import { deleteContact, editContact } from 'operations/getAPI.js';
import { selectVisibleContacts } from 'redux/selectors';

import {
  ContactListStyled,
  ContactListItem,
  ContactListItemText,
  ContactListItemEditButton,
  ContactListItemDeleteButton,
  Wrapper,
  ImageHolder,
} from './ContactList.styled.js';

import { SubTitle } from '../index.js';

import error from '../Images/error.jpg';
import { useState } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();

  const [changes, setChanges] = useState(null);

  const sortedVisibleContacts = useSelector(selectVisibleContacts).sort(
    (a, b) => (a.name > b.name ? 1 : -1)
  );

  console.log(sortedVisibleContacts.length);

  const changeItem = (event, id) => {
    event.preventDefault();
    setChanges(null);
    dispatch(
      editContact({
        contactId: id,
        name: event.currentTarget.elements.name.value,
        number: event.currentTarget.elements.number.value,
      })
    );
  };

  return (
    <Wrapper>
      {sortedVisibleContacts.length !== 0 ? (
        <>
          <SubTitle>
            {sortedVisibleContacts.length} contacts are in the Phonebook
          </SubTitle>
          <ContactListStyled>
            {sortedVisibleContacts.map(({ id, name, number }) => (
              <ContactListItem key={id}>
                {changes !== id ? (
                  <>
                    <ContactListItemText>
                      {name}: {number}
                    </ContactListItemText>
                    <ContactListItemEditButton
                      type="button"
                      onClick={() => setChanges(id)}
                    >
                      <CiEdit />
                    </ContactListItemEditButton>
                    <ContactListItemDeleteButton
                      type="button"
                      onClick={() => dispatch(deleteContact(id))}
                    >
                      <CiTrash />
                    </ContactListItemDeleteButton>
                  </>
                ) : (
                  <form key={id} onSubmit={event => changeItem(event, id)}>
                    <label>
                      <input type="text" name="name" defaultValue={name} />
                    </label>
                    <label>
                      <input type="text" name="number" defaultValue={number} />
                    </label>
                    <button type="submit">Change</button>
                  </form>
                )}
              </ContactListItem>
            ))}
          </ContactListStyled>
        </>
      ) : (
        <>
          <SubTitle>
            Ooops, there aren`t any contacts, Let`s change it.
          </SubTitle>
          <ImageHolder>
            <img src={error} alt="sad cat with phone" />
          </ImageHolder>
        </>
      )}
    </Wrapper>
  );
};
