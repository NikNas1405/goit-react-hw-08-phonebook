import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'operations/getAPI';

import {
  Filter,
  Form,
  ContactsFormWrapper,
  SubTitle,
  Loader,
  ContactList,
} from '../components/index';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const totalContacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsFormWrapper>
      <h2>Phonebook</h2>
      <Form />

      <h2>Your contacts</h2>
      <Filter />
      {error && (
        <div>
          We're sorry, an error has occurred. Please reload this page and try
          again
        </div>
      )}
      {isLoading && !error && <Loader />}
      {!isLoading && totalContacts && (
        <SubTitle>
          {totalContacts.length} contacts are in the Phonebook
        </SubTitle>
      )}
      {!isLoading && !error && <ContactList />}
    </ContactsFormWrapper>
  );
}
