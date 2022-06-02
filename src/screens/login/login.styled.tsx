import { Grid } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Grid)`
  min-height: 100vh;
  background-color: ${(props) => props.theme.palette.core.secondary};
`;

export const Error = styled.p`
  color: #e31a13;
  font-weight: 800;
`;
