// userSlice.js
import {createSlice} from '@reduxjs/toolkit';

interface UserState {
  isLogged: boolean,
  id: string | null,
  name: string | null,
  surname: string | null,
  email: string | null,
  role: string | null
}

// Check localStorage for existing user data
const storedUser = localStorage.getItem('user');
const initialState: UserState = storedUser
  ? JSON.parse(storedUser)
  : {
    isLogged: false,
    id: null,
    name: null,
    surname: null,
    email: null,
    role: null,
  };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.isLogged = true;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
      state.role = action.payload.role;

      // Save user data to localStorage
      localStorage.setItem('user', JSON.stringify(state));
    },
    logout(state) {
      state.isLogged = false;
      state.id = null;
      state.name = null;
      state.surname = null;
      state.email = null;
      state.role = null;

      // Clear user data from localStorage
      localStorage.removeItem('user');
    },
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;