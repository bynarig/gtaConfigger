import {createSlice} from '@reduxjs/toolkit';

interface UserState {
  isLogged: boolean,
  id?: string,
  name?: string,
  email?: string,
  role?: string
}

const initialState: UserState = {
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.isLogged = true;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    logout(state) {
      state.isLogged = false;
      state.id = undefined;
      state.name = undefined;
      state.email = undefined;
      state.role = undefined;
    },
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;