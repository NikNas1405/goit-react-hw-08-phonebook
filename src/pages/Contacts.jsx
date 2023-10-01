import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'operations/getAPI';

import {
  Filter,
  Form,
  FormWrapper,
  Loader,
  ContactList,
} from '../components/index';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <FormWrapper>
      <h2>Phonebook</h2>
      <Form />
      {isLoading && !error && <Loader />}
      {error && (
        <div>
          We're sorry, an error has occurred. Please reload this page and try
          again
        </div>
      )}
      {!isLoading && <h2>Your contacts</h2>}
      {!isLoading && <Filter />}
      {!isLoading && !error && <ContactList />}
    </FormWrapper>
  );
}
