import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  users: {},
  filter: {
    gender: 'Genre', city: '', state: '', nameFirst: '', nameLast: ''
  },
  userResult: {},
  initialPage: 0,
  itemOffSet: 0
};
const updateUsers = createAction('users/update');
const updateFilter = createAction('filter/update');
const updateUserResult = createAction('userResult/update');
const updateInitialPage = createAction('initialPage/update');
const updateItemOffSet = createAction('itemOffSet/update');

const searchReducer = createReducer(initialState, {
  [updateUsers]: (state, action) => {
    const { users } = action;

    return { ...state, users };
  },
  [updateFilter]: (state, action) => {
    const { filter } = action;

    return { ...state, filter };
  },
  [updateUserResult]: (state, action) => {
    const { userResult } = action;

    return { ...state, userResult };
  },
  [updateInitialPage]: (state, action) => {
    const { initialPage } = action;

    return { ...state, initialPage };
  },
  [updateItemOffSet]: (state, action) => {
    const { itemOffSet } = action;

    return { ...state, itemOffSet };
  }
});

export default searchReducer;
