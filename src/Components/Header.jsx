import { NavLink } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <div className="header">
      <div className="container">
        <header className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-bottom">
          <NavLink
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32" aria-hidden="true">
              <use xlinkHref="#bootstrap" />
            </svg>
            <img className="spiceLogo" src="/images/spiceLogo.jpg" alt="" />
            <span className="brand-name">
              Spice<span className="highlight">World</span>
            </span>
          </NavLink>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Cart({cartCount})
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/opentowork"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                OpenToWork
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;
