import { Grid } from "@mui/material";
import * as yup from "yup";
import { useCallback, useState } from "react";
import { Wrapper } from "./login.styled";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/navbar/navbar";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = useCallback(
    ({ target }: any) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData]
  );

  const handleSubmit = useCallback(async () => {
    try {
      const schema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required(),
      });

      await schema.validate(data);
      toast("Login success!");
    } catch (error: any) {
      toast.error(<p>{error.errors[0]}</p>);
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
        <Button onClick={handleSubmit} type="submit">
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
