import homeReducer from './home';
import authReducer from './auth';
import statsReducer from './stats';
import searchReducer from './search';

const reducers = {
  home: homeReducer, auth: authReducer, stats: statsReducer, search: searchReducer
};

export default reducers;
