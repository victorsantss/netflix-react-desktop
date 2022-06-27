import styled from 'styled-components';

interface BannerProps {
  imgCover: string;
}

export const Banner = styled.div<BannerProps>`
  width: 100%;
  background: url(${(props) => props.imgCover}) no-repeat center;
  background-size: cover;
  height: 26rem;
  position: relative;
  padding: 3rem 5rem;
`;

export const Title = styled.h2`
  color: white;
  display: block;
  margin: 24px 0 18px;
`;

export const Text = styled.p`
  color: white;
  display: block;
  font-size: 16px;
  margin: 0 0 18px;
`;
