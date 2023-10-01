import { useDispatch } from 'react-redux';
import { register } from 'operations/authAPI';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(
      register({
        name: event.currentTarget.elements.name.value,
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
      })
    );

    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
