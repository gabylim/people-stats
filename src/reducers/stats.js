import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  userNumber: 0, userManNumber: 0, userWomanNumber: 0, userByCountryNumber: {}, usersMaps: {}
};
const userNumber = createAction('userNumber/update');
const userMan = createAction('userMan/update');
const userWoman = createAction('userWoman/update');
const userByCountry = createAction('userByCountry/update');
const usersMaps = createAction('usersMaps/update');

const statsReducer = createReducer(initialState, {
  [userNumber]: (state, action) => {
    const { userNumber } = action;

    return { ...state, userNumber };
  },
  [userMan]: (state, action) => {
    const { userManNumber } = action;

    return { ...state, userManNumber };
  },
  [userWoman]: (state, action) => {
    const { userWomanNumber } = action;

    return { ...state, userWomanNumber };
  },
  [userByCountry]: (state, action) => {
    const { userByCountryNumber } = action;

    return { ...state, userByCountryNumber };
  },
  [usersMaps]: (state, action) => {
    const { usersMaps } = action;

    return { ...state, usersMaps };
  }
});

export default statsReducer;
