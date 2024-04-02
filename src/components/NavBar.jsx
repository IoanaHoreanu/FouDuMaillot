import { Link } from 'react-router-dom';
import "../styles/NavBar.scss";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/catalogue">Catalogue</Link>
        </li>
        <li>
          <Link to="/a-propos">À propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;