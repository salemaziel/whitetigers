import React from "react";
import Socialbuttons from "./socialbuttons";
import Sitemobilemenu from './sitemobilemenu'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'gatsby'

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'

import Wtlogo from '../../images/whitetigerslogo-139x150.png'
import Upsllogo from '../../images/upsl-logo.png'

class Sitenavbarheader extends React.Component {
  render() {
    return (
      <div className="flex-auto">
      <header className="site-navbar absolute transparent" role="banner">
        <div className="py-3">
          <div className="container">
            <div className="row align-items-center">
              <Socialbuttons />
              <div className="col-6 col-md-9 text-right">
                <div className="d-inline-block">
                  <a
                    href="#"
                    className="text-secondary p-2 d-flex align-items-center"
                  >
                    <span className="d-none d-md-block">
                      {" "}
                      UPSL - WESTERN CONFERENCE - SOCAL SOUTH - DIVISION I
                    </span>
                  </a>
                </div>
                <div className="d-inline-block">
                  <a
                    href="#"
                    className="text-secondary p-2 d-flex align-items-center"
                  >
                    <span className="d-none d-md-block">
                      <img src={Upsllogo} alt />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="site-navigation position-relative text-right bg-black text-md-right"
          role="navigation"
        >
          <div className="container position-relative">
            <div className="site-logo">

              <a href="/">
                <img src={Wtlogo} alt />
              </a>
            </div>
            <div className="d-inline-block d-md-none ml-md-0 mr-auto py-3">
              <a
                href="#"
                className="site-menu-toggle js-menu-toggle text-white"
              >
                <span className="icon-menu h3" />
              </a>
            </div>
            <ul className="site-menu js-clone-nav d-none d-md-block">
              <li className="active">
                <a href="/">Home</a>
              </li>
              {/**<li className="has-children">
                <a href="#">News</a>
                <ul className="dropdown arrow-top">
                  <li>
                    <a href="#">Menu One</a>
                  </li>
                  <li>
                    <a href="#">Menu Two</a>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                </ul>
    </li>**/}
              <li>
                <a href="/matches">Matches</a>
              </li>
              <li>
                <a href="/team">Team</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      </div>
    );
  }
}

export default Sitenavbarheader;
