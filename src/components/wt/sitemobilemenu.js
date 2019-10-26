import React from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'gatsby'


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/magnific-popup.css'

//import Wtlogo from '../../images/whitetigerslogo-139x150.png'

class Sitemobilemenu extends React.Component {
  state = {
    isOpen: false,
    width: '0px',
}
toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen,
    });
}
openNav = () => {
    this.setState({
        width: '270px',
    })
}

closeNav = () => {
    this.setState({
        width: '50px',
    });
}

  render() {
    return (
      <Nav>
      <div className="site-mobile-menu">
        <div
                    className="site-mobile-menu-header"
                    style={{
                        margin: '0 auto',
                        maxWidth: 960,
                        padding: '1.45rem 1.0875rem',
                        color: '#ffc529',
                    }}
                >
                    <h1 style={{ margin: 0, display: 'inline-block' }}>
                        <Link
                            to="/"
                            className="siteTitle"
                            style={{
                                textDecoration: 'none',
                                width: "5px",
                                height: "5px"
                            }}
                            
                        >
                        </Link>
                    </h1>

                    <div
                        id="site-mobile-menu"
                        className="icon-close2 js-menu-toggle"
                        style={{ width: this.state.width, height: '100%', background: '#FFF' }}
                    >
                        <div>
                            <a
                                href="javascript:void(0)"
                                className="closebtn"
                                onClick={this.closeNav}
                            >
                                &times;
                            </a>
                        </div>
                        <Link to="/">
                            HOME
                        </Link>
                        <Link to="/about">
                            ABOUT
                        </Link>
                        <Link to="/matches">
                            MATCHEs
                        </Link>
                        <Link to="/team">
                            TEAM
                        </Link>
                        <Link to="/contact">
                            CONTACT
                        </Link>

                        <div style={{padding: 20}}>
                            <div className="donate-btn-container" style={{paddingTop: 10, paddingBottom: 10}}>
                                <Link to="/donate/" id="donate-btn-hamburger" >Donate</Link>
                            </div>
                        </div>

                    </div>
                  
                    <span
                        className="openNavBtn"
                        style={{ fontSize: '40px', marginTop: 8, cursor: 'pointer', float: 'right' }}
                        onClick={this.openNav}
                    >
                        &#9776;
                    </span>
                  
                </div>  
                </div>
        
          {/**<div className="site-mobile-menu-logo">
            <a href="/">
              <img src={Wtlogo} alt="Image" />
            </a>
          </div>
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
                          </div>**/}
      </Nav>
    );
  }
}

export default Sitemobilemenu;
