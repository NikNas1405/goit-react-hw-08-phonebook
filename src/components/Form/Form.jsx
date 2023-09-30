import React from 'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { addContact } from 'operations/getAPI';

import {
  StyledFormButton,
  StyledForm,
  StyledField,
  Label,
} from './Form.styled';


// Synchronous validation function
const validateName = value => {
  let errorMessage;
  if (
    !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)
  ) {
    errorMessage =
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
  }
  return errorMessage;
};

const validatePhone = value => {
  let errorMessage;
  if (
    !/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/i.test(
      value
    )
  ) {
    errorMessage =
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
  }
  return errorMessage;
};

//usage
export const Form = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      onSubmit={(values, actions) => {
        dispatch(addContact({ ...values, id: nanoid() }));
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <Label htmlFor="name">Name</Label>
          <StyledField
            validate={validateName}
            type="text"
            name="name"
            placeholder="Taras Shevchenko"
          ></StyledField>
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <Label htmlFor="phone">Phone</Label>
          <StyledField
            validate={validatePhone}
            type="tel"
            name="phone"
            placeholder="0501234567"
          ></StyledField>
          {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
          <StyledFormButton type="submit">Add contact</StyledFormButton>
        </StyledForm>
      )}
    </Formik>
  );
};
