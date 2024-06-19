import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { url, setHeaders } from "./api";

const initialState = {
  token: localStorage.getItem("token"),
  firstName: "",
  LastName: "",
  email: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (users, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/register`, {
        firstName: users.firstName,
        LastName: users.LastName,
        email: users.email,
        password: users.password,
      });

      const token = response.data;

      localStorage.setItem("token", token);

      return token;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (users, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/login`, {
        email: users.email,
        password: users.password,
      });

      const token = response.data;

      localStorage.setItem("token", token);

      return token;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url}/user/${id}`, setHeaders());

      const token = response.data;

      localStorage.setItem("token", token);

      return token;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;

      if (token) {
        const users = jwtDecode(token);
        return {
          ...state,
          token,
          firstName: users.firstName,
          LastName: users.LastName,
          email: users.email,
          _id: users._id,
          userLoaded: true,
        };
      } else {
        return { ...state, userLoaded: true };
      }
    },
    logoutUser(state, action) {
      localStorage.removeItem("token");

      return {
        ...initialState,
        userLoaded: true,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        return { ...state, registerStatus: "pending" };
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const token = action.payload;
        if (token) {
          const users = jwtDecode(token);
          return {
            ...state,
            token,
            firstName: users.firstName,
            LastName: users.LastName,
            email: users.email,
            _id: users._id,
            registerStatus: "success",
          };
        } else {
          return {
            ...state,
            registerStatus: "rejected",
            registerError: "Failed to register user",
          };
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        return {
          ...state,
          registerStatus: "rejected",
          registerError: action.payload,
        };
      })
      .addCase(loginUser.pending, (state, action) => {
        return { ...state, loginStatus: "pending" };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const token = action.payload;
        if (token) {
          const users = jwtDecode(token);
          return {
            ...state,
            token,
            firstName: users.firstName,
            LastName: users.LastName,
            email: users.email,
            _id: users._id,
            loginStatus: "success",
          };
        } else {
          return {
            ...state,
            loginStatus: "rejected",
            loginError: "Failed to login user",
          };
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        return {
          ...state,
          loginStatus: "rejected",
          loginError: action.payload,
        };
      })
      .addCase(getUser.pending, (state, action) => {
        return {
          ...state,
          getUserStatus: "pending",
        };
      })
      .addCase(getUser.fulfilled, (state, action) => {
        const token = action.payload;
        if (token) {
          const users = jwtDecode(token);
          return {
            ...state,
            token,
            firstName: users.firstName,
            LastName: users.LastName,
            email: users.email,
            _id: users._id,
            getUserStatus: "success",
          };
        } else {
          return {
            ...state,
            getUserStatus: "rejected",
            getUserError: "Failed to get user",
          };
        }
      })
      .addCase(getUser.rejected, (state, action) => {
        return {
          ...state,
          getUserStatus: "rejected",
          getUserError: action.payload,
        };
      });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
