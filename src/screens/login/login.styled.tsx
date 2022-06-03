import { Grid } from "@mui/material";
import styled from "styled-components";
import landingImg from "../../assets/landingImg.jpg";

export const Wrapper = styled(Grid)`
  min-height: 100vh;
  /* background-color: ${(props) => props.theme.palette.core.secondary}; */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${landingImg});
`;
