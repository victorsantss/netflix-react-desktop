import React from 'react';
import { Container, LandingSectionContainer } from './landing_section.styled';

interface LandingSectionProps {
  title: string;
  subtitle: string;
  image: string;
}

function LandingSection({ title, subtitle, image }: LandingSectionProps) {
  return (
    <Container>
      <LandingSectionContainer>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <img src={image} alt={image} />
      </LandingSectionContainer>
    </Container>
  );
}

export default LandingSection;
