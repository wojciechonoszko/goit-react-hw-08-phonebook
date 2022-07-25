import axios from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.default.baseUrl = 'https://connections-api.herokuapp.com/';

Notiflix.Notify.init({
    width: '400px',
    position: 'center-top',
    distance: '20px',
    opacity: 10,
      fontSize: '20px',
    timeout: 3000,
    
  });

  export const token = {
      set(token) {
          axios.default.headers.common.Authorization = `Bearer ${token}`
      },
      unSet() {
          axios.default.headers.common.Authorization = ``
      }
  };

  export const register = createAsyncThunk('auth/register', async credentials => {
      try {
        console.log(credentials)
        const { data } = await axios.post('/users/signup', credentials);
        console.log(data)
        token.set(data.token)
        Notiflix.Notify.success('Congratulations, registration successful');
        return data;
      } catch (error) { Notiflix.Notify.failure("Please, enter valid Email or Password")}
  });

  const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        console.log(credentials)
        const { data } = await axios.post('/users/login', credentials)
        token.set(data.token);        
        console.log(data)
        return data;
    } catch (error) { Notiflix.Notify.failure('Please, enter valid Email or Password') }
});

  const logOut = createAsyncThunk('auth/logout', async() => {
      try {
          await axios.post('/users/logout');
          token.unSet();
      } catch (error) {console.log(error.message)}
  });

  const fetchCurrentUser = createAsyncThunk('auth/refresh',
  async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (persistedToken === null) {
          return thunkAPI.rejectWithValue();
      }
      token.set(persistedToken);
      try {
          const { data } = await axios.get('/users/current');
          console.log(data)
          return data;
      } catch (error) { console.log(error.message)}
  });

  const authOperations = {
    register,
    logIn,
    logOut,
    fetchCurrentUser,
};

export default authOperations;