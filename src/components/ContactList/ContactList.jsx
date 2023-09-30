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
} from './ContactList.styled.js';

export const ContactList = () => {
  const dispatch = useDispatch();

  const sortedVisibleContacts = useSelector(selectVisibleContacts).sort(
    (a, b) => (a.name > b.name ? 1 : -1)
  );

  return (
    <Wrapper>
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
    </Wrapper>
  );
};
