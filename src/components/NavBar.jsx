import { Link } from 'react-router-dom';
import "../styles/NavBar.css";
import logo from "../assets/FouDuMaillot.png";
import panierIcon from "../assets/panier.png";
//import utilisateurIcon from "../assets/utilisateur_icon.svg";

const Navbar = () => {
    return (
      <div>
        <nav className="navContainer">
            <Link to="/">
                <img src={logo} alt="logo" className="logoNavbar" />
            </Link>
            <ul className="ulNavbar">
            <li>
                <Link to="/">ACCUEIL</Link>
            </li>
            <li >
                <Link to="/catalogue">CATALOGUE</Link>
            </li>
            <li>
                <Link to="/apropos">A PROPOS</Link>
            </li> 
            </ul>
            <div className="basketContainer">
                <Link to="/panier">
                    <img className="basketNav" src={panierIcon} alt="basket_icon" />
                </Link>
            </div>
        </nav>
      </div>
    );
  };
  

export default Navbar;