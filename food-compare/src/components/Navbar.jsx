import { NavLink, Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext.jsx";
import { useCompare } from "../context/CompareContext.jsx";

function Navbar(){
  const { favorites } = useFavorites();
  const { compareItems } = useCompare();

  return(

    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold text-success" to="/">
            <i className="bi bi-egg-fried me-2"></i>
            FoodCompare
          </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Apri menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button> 
        
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto gap-lg-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Alimenti
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/compare">
                Confronta <span className="badge text-bg-success">{compareItems.length}</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/favorites">
                Preferiti <span className="badge text-bg-warning">{favorites.length}</span>
              </NavLink>
            </li>
          </ul>
        </div>                


        </div>
    </nav>
  )
}

export default Navbar