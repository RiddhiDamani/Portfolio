import React from "react";
//-----React Font Awesome -----
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/#">
          {/* <h4 className="font-color">Riddhi Damani </h4> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-110}
                className="nav-link"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-110}
                className="nav-link"
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="experience"
                smooth={true}
                offset={-110}
                duration={500}
                spy={true}
                exact="true"
                className="nav-link"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="portfolio"
                smooth={true}
                offset={-110}
                duration={500}
                spy={true}
                exact="true"
                className="nav-link"
              >
                Portfolio
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                smooth={true}
                to="services"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Services
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                smooth={true}
                to="contacts"
                offset={-110}
                duration={500}
                spy={true}
                exact="true"
                className="nav-link"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
