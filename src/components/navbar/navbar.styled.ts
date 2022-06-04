import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  position: absolute;
  background: transparent;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2rem;
  z-index: 10;
  img {
    width: 14rem;
    height: 8rem;
  }
  button {
    width: 5rem;
  }
`;
