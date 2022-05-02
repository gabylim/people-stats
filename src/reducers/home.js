import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = { description: 'Hello' };
const updateDescription = createAction('description/update');

const homeReducer = createReducer(initialState, {
  [updateDescription]: (state, action) => {
    const { description } = action;

    return { ...state, description };
  }
});

export default homeReducer;
