import React, { ChangeEvent, useCallback, useState } from 'react';
import { Grid } from '@mui/material';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import Input from 'components/input/input';
import Button from 'components/button/button';
import Navbar from 'components/navbar/navbar';
import { Wrapper } from './login.styled';
import 'react-toastify/dist/ReactToastify.css';
import { Error } from '../../types/yup';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

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
    } catch (yupError: unknown) {
      toast.error(<p>{(yupError as Error).errors[0]}</p>);
    }
  }, [data]);

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
