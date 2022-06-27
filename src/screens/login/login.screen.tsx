import React, {
  ChangeEvent, useCallback, useState,
  useEffect,
} from 'react';
import { Grid } from '@mui/material';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import Input from 'components/input/input';
import Button from 'components/button/button';
import Navbar from 'components/navbar/navbar';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from 'store/user/user.slice';
import { tokenSelector } from 'store/user/user.selector';
import { SHOWS_URL } from 'screens/shows/shows.type';
import { USER_TOKEN_COOKIE } from 'store/user/user.type';
import { useLocation, useNavigate } from 'react-router-dom';
import { Wrapper } from './login.styled';
import 'react-toastify/dist/ReactToastify.css';
import { Error } from '../../types/yup';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const navigate = useNavigate();
  const from = useLocation();

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData],
  );

  const handleSubmit = useCallback(async () => {
    try {
      const schema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required(),
      });

      await schema.validate(data);

      toast('Login success!');
      dispatch(userSlice.actions.authentication(data));
    } catch (yupError: unknown) {
      toast.error(<p>{(yupError as Error).errors[0]}</p>);
    }
  }, [data]);

  useEffect(() => {
    const localToken = localStorage.getItem(USER_TOKEN_COOKIE);

    if (localToken) {
      dispatch(userSlice.actions.setData({
        token: localToken,
      }));
    }
  }, []);

  useEffect(
    () => {
      if (token) {
        navigate(SHOWS_URL, { state: { from } });
      }
    },
    [token],
  );

  return (
    <Wrapper container justifyContent="center" alignContent="center">
      <Navbar />
      <Grid container item xs={2} justifyContent="center" alignContent="center">
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>
          Entrar
        </Button>
        <ToastContainer
          position="top-center"
          theme="dark"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Grid>
    </Wrapper>
  );
}
