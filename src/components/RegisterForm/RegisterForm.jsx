import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
        <TextField
          margin="normal"
          id="name"
          autoComplete="name"
          name="name"
          fullWidth
          label="Name"
        />
      </label>
      <label>
        <TextField
          margin="normal"
          id="email"
          fullWidth
          label="Email Address"
          name="email"
          autoComplete="email"
        />
      </label>
      <label>
        <TextField
          margin="normal"
          id="password"
          fullWidth
          name="password"
          label="Password (min 7 symbols)"
          type="password"
          autoComplete="new-password"
        />
      </label>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: '#008080' }}
      >
        Sign Up
      </Button>
    </form>
  );
};

// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import { useDispatch } from 'react-redux';
// import { register } from 'operations/authAPI';

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = event => {
//     event.preventDefault();

//     dispatch(
//       register({
//         name: event.currentTarget.elements.name.value,
//         email: event.currentTarget.elements.email.value,
//         password: event.currentTarget.elements.password.value,
//       })
//     );

//     event.currentTarget.reset();
//   };

//   return (
//     <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <TextField
//             id="outlined-basic"
//             variant="outlined"
//             autoComplete="name"
//             name="name"
//             fullWidth
//             label="Name"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             id="outlined-basic"
//             variant="outlined"
//             fullWidth
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             id="outlined-basic"
//             variant="outlined"
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             autoComplete="new-password"
//           />
//         </Grid>
//       </Grid>
//       <Button
//         type="submit"
//         fullWidth
//         variant="contained"
//         sx={{ mt: 3, mb: 2, backgroundColor: '#008080' }}
//       >
//         Sign Up
//       </Button>
//     </Box>
//   );
// };
