import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams
} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import db from '../dbusers.json';
import Accueil from './components/home';
import Login from './components/login';
// import Search from './components/search/search';
import User from './components/search/user';
import CommonNavbar from './components/common/navbar';
import Error from './components/common/error';

const Private = ({ Component }) => {
  const [cookie] = useCookies(['login', 'username']);
  const dispatch = useDispatch();

  if (cookie.login !== 'true') {
    return (<Navigate to='/connexion' />);
  }
  dispatch({
    type: 'isConnected/update',
    isConnected: true
  });
  const user = db.results.filter((v) => v.login.username === cookie.username);
  dispatch({
    type: 'userConnected/update',
    user: user[0]
  });

  dispatch({
    type: 'userNumber/update',
    userNumber: db.results.length
  });

  const countGenre = { male: 0, female: 0 };

  db.results.forEach((item) => { countGenre[item.gender] += 1; });
  dispatch({
    type: 'userMan/update',
    userManNumber: countGenre.male
  });

  dispatch({
    type: 'userWoman/update',
    userWomanNumber: countGenre.female
  });

  const country = [...new Set(db.results.map((item) => item.location.country))];
  const dict = {};

  country.forEach((item) => {
    dict[item] = 0;
  });

  db.results.forEach((item) => { dict[item.location.country] += 1; });

  dispatch({
    type: 'userByCountry/update',
    userByCountryNumber: dict
  });

  dispatch({
    type: 'usersMaps/update',
    usersMaps: db.results.slice(0, 100)
  });

  return (<><CommonNavbar /><Component /></>);
};

const Public = ({ Component }) => {
  const [cookie] = useCookies(['login']);
  if (cookie.login === 'true') {
    return (<Navigate to='/' />);
  }

  return (<Component />);
};
const PrivateUser = ({ Component }) => {
  const [cookie] = useCookies(['login', 'username']);
  const dispatch = useDispatch();
  const { username } = useParams();

  if (cookie.login !== 'true') {
    return (<Navigate to='/connexion' />);
  }
  dispatch({
    type: 'isConnected/update',
    isConnected: true
  });
  const user = db.results.filter((v) => v.login.username === cookie.username);
  dispatch({
    type: 'userConnected/update',
    user: user[0]
  });

  const userResult = db.results.filter((v) => v.login.username === username);
  dispatch({
    type: 'userResult/update',
    userResult: userResult[0]
  });

  return (<><CommonNavbar /><Component /></>);
};
const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/"element={<Private Component={Accueil} />} />
      <Route path='/connexion' element={<Public Component={Login} />} />
      <Route path="/user/:username" element={<PrivateUser Component={User} />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
