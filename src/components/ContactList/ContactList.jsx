import { useDispatch, useSelector } from 'react-redux';
import { CiTrash } from 'react-icons/ci';

import { deleteContact } from 'operations/getAPI.js';
import { selectVisibleContacts } from 'redux/selectors';

import {
  ContactListStyled,
  ContactListItem,
  ContactListItemText,
  ContactListItemDeleteButton,
  Wrapper,
  ImageHolder,
} from './ContactList.styled.js';

import { SubTitle } from '../index.js';

import error from '../Images/error.jpg';

export const ContactList = () => {
  const dispatch = useDispatch();

  const sortedVisibleContacts = useSelector(selectVisibleContacts).sort(
    (a, b) => (a.name > b.name ? 1 : -1)
  );

  console.log(sortedVisibleContacts.length);

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
                <ContactListItemText>
                  {name}: {number}
                </ContactListItemText>
                <ContactListItemDeleteButton
                  onClick={() => dispatch(deleteContact(id))}
                >
                  <CiTrash />
                </ContactListItemDeleteButton>
              </ContactListItem>
            ))}
          </ContactListStyled>
        </>
      ) : (
        <>
          <SubTitle>
            Ooops, there aren`t any saved contacts, Let`s change it.
          </SubTitle>
          <ImageHolder>
            <img src={error} alt="sad cat with phone" />
          </ImageHolder>
        </>
      )}
    </Wrapper>
  );
};
