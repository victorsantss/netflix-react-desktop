import styled from 'styled-components';
import landingImg from 'assets/landingImg.jpg';

export const LandingContainer = styled.div`
  font-family: "Helvetica Neue", Helvetica, sans-serif;

  // Sets second LoadingSection text on right
  div:nth-child(3),
  div:nth-child(5) {
    div {
      flex-direction: row-reverse;
      div {
        flex-direction: column;
      }
    }
  }

  @media (max-width: 948px) {
    div:nth-child(3),
    div:nth-child(5) {
      div {
        flex-direction: column;
      }
    }
  }
`;

export const LandingHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95vh;
  width: 100%;
  border-bottom: 8px solid #222;
  background-color: #1a1a1a;
  margin: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${landingImg});
`;

export const LandingTexts = styled.div`
  width: 50%;
  text-align: center;
  color: #fff;
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 1.6rem;
    margin: 1rem auto;
  }
`;
