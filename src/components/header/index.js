import Logo from "../../img/logo.png";
import MobileMenu from "../../components/MobileMenu";
import { Link } from "react-router-dom";

import "./style.css";

const Header = () => {
  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      <div className="row">
        <div className="col-lg-12">
          <div className="header-inn">
            <div className="site-logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="header-navigation">
              <div className="mainmenu">
                <nav id="menu">
                  <ul className="dropdown">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        Projects
                      </Link>
                      <ul>
                        <li>
                          <Link to="/projects">Project</Link>
                        </li>
                        <li>
                          <Link to="/projects-single">Project Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        Service
                      </Link>
                      <ul>
                        <li>
                          <Link to="/service">Service</Link>
                        </li>
                        <li>
                          <Link to="/service-single">Service Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        Pages
                      </Link>
                      <ul>
                        <li>
                          <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                          <Link to="/team">Team</Link>
                        </li>
                        <li>
                          <Link to="/faq">Faq</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                          <Link to="/404">Error</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        Blog
                      </Link>
                      <ul>
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/blog-single">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-action">
                <Link to="/contact" className="header-btn">
                  <div className="icon-holder">
                    <i className="far fa-envelope"></i>
                  </div>
                  Get In Touch
                </Link>
              </div>

              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
