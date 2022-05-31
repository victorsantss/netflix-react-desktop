import LandingSection from "../../components/LandingSection";
import { LandingTexts, LandingHero, LandingContainer } from "./landing.styled";
import tvImg from "../../assets/tvImg.png";
import mobileImg from "../../assets/mobileImg.jpg";
import devicesImg from "../../assets/devicesImg.png";
import kidsImg from "../../assets/kidsImg.png";

export default function Landing() {
  return (
    <LandingContainer>
      <LandingHero>
        <LandingTexts>
          <h1>Filmes, séries e muito mais. Sem limites.</h1>
          <h2>Assista onde quiser. Cancele quando quiser.</h2>
          <h3>
            Pronto para assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </h3>
        </LandingTexts>
      </LandingHero>
      <LandingSection
        title="Aproveite na TV."
        subtitle="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
        image={tvImg}
      />
      <LandingSection
        title="Baixe séries para assistir offline."
        subtitle="Salve seus títulos favoritos e sempre tenha algo para assistir."
        image={mobileImg}
      />
      <LandingSection
        title="Assista quando quiser."
        subtitle="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
        image={devicesImg}
      />
      <LandingSection
        title="Crie perfis para crianças."
        subtitle="Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."
        image={kidsImg}
      />
    </LandingContainer>
  );
}
