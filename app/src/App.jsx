import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const App = () => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    username: '',
    age: '',
    email: '',
    password: '',
    bio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const reset = () => {
    setFormData({
      fullName: '',
      username: '',
      age: '',
      email: '',
      password: '',
      bio: '',
    });
  };

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
          maxWidth: '1000px',
          width: '100%',
          margin: '0 auto',
          '& .MuiTextField-root': { m: 0.5, mx: -0.5 },
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Create Your Account
        </Typography>

        <Box sx={{ display: 'flex', width: '100%', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            id="fullName"
            label="FullName"
            name="fullName"
            type = "text"
            value={formData.fullName}
            onChange={handleChange}
            sx={{ flex: 1, minWidth: '200px' }}
          />
          <TextField
            id="username"
            label="Username"
            name="username"
            type = "text"
            value={formData.username}
            onChange={handleChange}
            sx={{ flex: 1, minWidth: '200px' }}
          />
          <TextField
            id="age"
            label="Age"
            name="age"
            type = "number"
            value={formData.age}
            onChange={handleChange}
            sx={{ flex: 1, minWidth: '200px' }}
          />
        </Box>

        <Box sx={{ display: 'flex', width: '100%', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            id="email"
            label="Email"
            name="email"
            type='email'
            value={formData.email}
            onChange={handleChange}
            sx={{ flex: 1, minWidth: '200px' }}
          />
          <TextField
            id="password"
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            sx={{ flex: 1, minWidth: '200px' }}
          />
        </Box>

        <Box sx={{ display: 'flex', width: '100%', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            id="bio"
            label="Bio"
            name="bio"
            type='text'
            value={formData.bio}
            onChange={handleChange}
            multiline
            sx={{ flex: 1, minWidth: '200px' }}
          />
        </Box>

        <Box sx={{ display: 'flex', width: '100%', gap: 2, flexWrap: 'wrap' }}>
          <ColorButton
            onClick={reset}  
            variant="contained"
            sx={{ minWidth: '100%', mt: 1 }}
          >
            Sign Up
          </ColorButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
