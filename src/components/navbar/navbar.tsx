import { Nav } from "./navbar.styled";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_URL } from "../../screens/login/login.type";
import netflixLogo from "../../assets/netflixLogo.png";
import Button from "../button/button";
import { LANDING_URL } from "../../screens/landing/landing.type";

function Navbar() {
  const location = useLocation();
  return (
    <Nav>
      <Link to={LANDING_URL}>
        <img src={netflixLogo} alt={netflixLogo} />
      </Link>
      {location.pathname === "/" && (
        <Link to={LOGIN_URL}>
          <Button>Entrar</Button>
        </Link>
      )}
    </Nav>
  );
}

export default Navbar;
