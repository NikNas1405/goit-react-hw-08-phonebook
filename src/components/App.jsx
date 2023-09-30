import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'operations/getAPI';
import Loader from './Loader/Loader';
import { GlobalStyle, Container, SubTitle } from './GlobalStyle';

export const App = () => {
  const totalContacts = useSelector(selectContacts);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
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
      <ToastContainer />
      <GlobalStyle />
    </Container>
  );
};
