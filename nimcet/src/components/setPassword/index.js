import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, List, ListItem, ListItemText, MenuItem, Select } from '@mui/material';

export default function SetPassword() {

  const handleSubmit = () => {}
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box
        sx={{
          marginLeft: 4, 
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: "1px solid black",
          padding: "4px",
          borderRadius: "5px",
        }}
      >
        <Typography component="h1" variant="h5">
          Important Information
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <List>
            <ListItem disablePadding>
              <ListItemText primary="1. Please read the instructions carefully before setting up the password. " />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="2. Passworde must be a string containing atleast eight characters." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="3. Password must contain atrleast one uppercase alphabet, atleast ont lowercase alphabet, atleast one special character such as *,$,@,&,^,-,=,/, etc." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="4. Select the security question wisely." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="5. Candidate must remember password and security question throughout the NIMCET 2022 process." />
            </ListItem>
          </List>
        </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            marginRight: 4,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: "1px solid black",
            padding: "4px",
            borderRadius: "5px",
          }}
        >
          <Typography component="h1" variant="h5">
            Set Your Password?
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Choose a Password"
              name="password"
              autoComplete="password"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="passwordConfirm"
              label="Password Confirmation"
              type="password"
              id="passwordConfirm"
              autoComplete="current-password"
            />

            <FormControl 
              margin="normal"
              required
              fullWidth>
              <InputLabel id="demo-simple-select-label">Security Question</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="10"
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>What was the name of your elementary school ?</MenuItem>
                <MenuItem value={20}>What is your pet name ? </MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              name="answer"
              label="Answer"
              type="text"
              id="answer"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Activate
            </Button>
        </Box>
        </Box>
      </Grid>
    </Grid>
  );
}