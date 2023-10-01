import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { logIn } from 'operations/authAPI';
import { NavLink } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      logIn({
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
      })
    );
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
      </label>
      <label>
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
      </label>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: '#008080' }}
      >
        Sign In
      </Button>
      <NavLink to="/register">Don't have an account? Sign Up </NavLink>
    </form>
  );
};

// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import { useDispatch } from 'react-redux';

// import { logIn } from 'operations/authAPI';

// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = event => {
//     event.preventDefault();
//     dispatch(
//       logIn({
//         email: event.currentTarget.elements.email.value,
//         password: event.currentTarget.elements.password.value,
//       })
//     );
//     event.currentTarget.reset();
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}
//     >
//       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//         <TextField
//           margin="normal"
//           fullWidth
//           id="email"
//           label="Email Address"
//           name="email"
//           autoComplete="email"
//           autoFocus
//         />
//         <TextField
//           margin="normal"
//           fullWidth
//           name="password"
//           label="Password"
//           type="password"
//           id="password"
//           autoComplete="current-password"
//         />
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2, backgroundColor: '#008080' }}
//         >
//           Sign In
//         </Button>
//       </Box>
//     </Box>
//   );
// };
