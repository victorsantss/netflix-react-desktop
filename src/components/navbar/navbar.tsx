import { Nav } from "./navbar.styled";
import { Link } from "react-router-dom";
import { LOGIN_URL } from "../../screens/login/login.type";
import netflixLogo from "../../assets/netflixLogo.png";
import Button from "../button/button";

function Navbar() {
  return (
    <Nav>
      <img src={netflixLogo} alt={netflixLogo} />
      <Link to={LOGIN_URL}>
        <Button>Entrar</Button>
      </Link>
    </Nav>
  );
}

export default Navbar;
