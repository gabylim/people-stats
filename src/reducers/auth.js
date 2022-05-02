import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = { isConnected: false, user: null };
const isConnected = createAction('isConnected/update');
const userConnected = createAction('userConnected/update');

const authReducer = createReducer(initialState, {
  [isConnected]: (state, action) => {
    const { isConnected } = action;

    return { ...state, isConnected };
  },
  [userConnected]: (state, action) => {
    const { user } = action;

    return { ...state, user };
  }
});

export default authReducer;
