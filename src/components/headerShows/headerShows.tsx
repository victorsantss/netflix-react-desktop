import React from 'react';
import { Link } from 'react-router-dom';
import netflixLogo from 'assets/netflixLogo.png';
import { SHOWS_URL } from 'screens/shows/shows.type';
import { useDispatch } from 'react-redux';
import userSlice from 'store/user/user.slice';
import { Nav } from './headerShows.styled';
import { LOGIN_URL } from '../../screens/login/login.type';
import Button from '../button/button';

function HeaderShows() {
  const dispatch = useDispatch();

  const handleLogoff = () => {
    dispatch(userSlice.actions.logoff());
  };
  return (
    <Nav>
      <Link to={SHOWS_URL}>
        <img src={netflixLogo} alt={netflixLogo} />
      </Link>
      <Link to={LOGIN_URL}>
        <Button onClick={handleLogoff}>
          Sair
        </Button>
      </Link>
    </Nav>
  );
}

export default HeaderShows;
