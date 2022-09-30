import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postUserRegistrationThunk } from '../../redux/operations/operationsAuth';
import { getError, getIsLoading } from '../../redux/selectors/authSelectors';

import { Alert, Box, Stack, TextField } from '@mui/material';

import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const data = { name, email, password };
      await dispatch(postUserRegistrationThunk(data)).unwrap();
      toast.success('You have successfully registered');
      // navigate('/', { replace: true });
      resetForm();
    } catch (error) {
      toast.error('Error');
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          width: '100%',
        }}
        onSubmit={handleSubmit}
        noValidate
      >
        <h1 className="title">Registration</h1>
        <Stack sx={{ width: '100%', alignItems: 'center' }} spacing={2}>
          {!!error && (
            <Alert
              sx={{ width: '100%', maxWidth: '450px', boxSizing: 'border-box' }}
              severity="error"
            >
              {error}
            </Alert>
          )}
          <TextField
            className="form-input"
            id="outlined-required"
            label="Name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
          <TextField
            className="form-input"
            id="outlined-required"
            label="Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <TextField
            className="form-input"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />

          <LoadingButton
            loading={isLoading}
            loadingPosition="start"
            startIcon={<LoginIcon />}
            variant="contained"
            disabled={isLoading}
            type="submit"
          >
            Sign Up
          </LoadingButton>
          <p>
            You already have an account? <Link to="/login">Sign In!</Link>
          </p>
        </Stack>
      </Box>
    </>
  );
};
