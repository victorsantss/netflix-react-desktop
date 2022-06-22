import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 30rem;
  background-color: black;
  border-bottom: 0.5rem solid #333;
  color: #fff;
`;

export const LandingSectionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin: auto;
  @media (max-width: 948px) {
    flex-direction: column;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 1.2rem;
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.6rem;
    }
  }
  img {
    width: 50%;
  }
`;
