import * as React from "react";
import { useState, useEffect } from "react";
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container, IconButton, InputAdornment, createTheme, ThemeProvider } from "@mui/material";
import { LockOutlined as LockOutlinedIcon, Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";

const defaultTheme = createTheme();

const SignInPage = ({ setIsLoggedIn, setCurrentUser }) => {
  const navigate = useNavigate();
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      setIsLoggedIn(true);
      setCurrentUser(currentUser);
    }
  }, [setIsLoggedIn, setCurrentUser]);

  const handleSignIn = async (event) => {
    event.preventDefault();

    if (email === "") {
      setErrorEmail("(*) Email is required");
      return;
    }

    if (password === "") {
      setErrorPassword("(*) Password is required");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3001/users?email=${email}&password=${password}`);
      const users = response.data;
      if (users.length > 0) {
        alert("Login successful");
        setIsLoggedIn(true);
        setCurrentUser(users[0]);
        navigate("/");
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("currentUser", JSON.stringify(users[0]));
      } else {
        setErrorEmail("Invalid email or password");
        setErrorPassword("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={errorEmail !== ""}
              helperText={errorEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={errorPassword !== ""}
              helperText={errorPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <RouterLink to="#" variant="body2">
                  Forgot password?
                </RouterLink>
              </Grid>
              <Grid item>
                <RouterLink to="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignInPage;
