import * as React from "react";
import { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  IconButton,
  InputAdornment,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import {
  LockOutlined as LockOutlinedIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../stores/slice/AuthSlice";
const defaultTheme = createTheme();

const SignInPage = ({ setIsLoggedIn, setCurrentUser }) => {
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  useEffect(() => {
    if (auth._id) {
      Navigate("/");
    }
  }, [auth._id, Navigate]);
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });
  const handleSignIn = async (event) => {
    event.preventDefault();
    dispatch(loginUser(users))

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {auth.loginStatus === "rejected" ? (
            <p>{auth.loginError}</p>
          ) : null}
          <Box
            component="form"
            onSubmit={handleSignIn}
            noValidate
            sx={{ mt: 1 }}
          >
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
              onChange={(e) =>
                setUsers({ ...users, email: e.target.value })
              }
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
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={errorPassword !== ""}
              helperText={errorPassword}
              onChange={(e) =>
                setUsers({ ...users, password: e.target.value })
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {auth.loginStatus === "pending" ? "Submitting" : "Login"}
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
