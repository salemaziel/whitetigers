import React from "react";
import Aboutushero from "./Aboutushero";
import Aboutsection2 from "./Aboutsection2";
import Aboutsection3 from "./Aboutsection3";
import Aboutslider from "./Aboutslider";
import Aboutmatchhighlights from "./Aboutmatchhighlights";

class Sitewrap extends React.Component {
  render() {
    return (
      <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-logo">
              <a href="#">
                <img src="images/whitetigerslogo-139x150.png" alt="" />
              </a>
            </div>
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
        <header className="site-navbar absolute transparent" role="banner">
          <div className="py-3">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6 col-md-3">
                  <a href="#" className="text-secondary px-2 pl-0">
                    <span className="icon-facebook" />
                  </a>
                  <a href="#" className="text-secondary px-2">
                    <span className="icon-instagram" />
                  </a>
                  <a href="#" className="text-secondary px-2">
                    <span className="icon-twitter" />
                  </a>
                  <a href="#" className="text-secondary px-2">
                    <span className="icon-linkedin" />
                  </a>
                </div>
                <div className="col-6 col-md-9 text-right">
                  <div className="d-inline-block">
                    <a
                      href="#"
                      className="text-secondary p-2 d-flex align-items-center"
                    >
                      <span className="icon-envelope mr-3" />{" "}
                      <span className="d-none d-md-block">
                        youremail@domain.com
                      </span>
                    </a>
                  </div>
                  <div className="d-inline-block">
                    <a
                      href="#"
                      className="text-secondary p-2 d-flex align-items-center"
                    >
                      <span className="icon-phone mr-0 mr-md-3" />{" "}
                      <span className="d-none d-md-block">+1 232 3532 321</span>
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
                <a href="index.html">
                  <img src="images/whitetigerslogo-139x150.png" alt />
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
                <li className="has-children">
                  <a href="index.html">Home</a>
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
                    <li className="has-children">
                      <a href="#">Sub Menu</a>
                      <ul className="dropdown">
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
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="news.html">News</a>
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
                </li>
                <li>
                  <a href="matches.html">Matches</a>
                </li>
                <li>
                  <a href="team.html">Team</a>
                </li>
                <li className="active">
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <Aboutushero></Aboutushero>
        <Aboutsection2></Aboutsection2>
        <Aboutsection3></Aboutsection3>
        <Aboutslider></Aboutslider>
        <Aboutmatchhighlights></Aboutmatchhighlights>
        <footer className="site-footer border-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="mb-5">
                  <h3 className="footer-heading mb-4">About White Tigers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Saepe pariatur reprehenderit vero atque, consequatur id
                    ratione, et non dignissimos culpa? Ut veritatis, quos illum
                    totam quis blanditiis, minima minus odio!
                  </p>
                </div>
                <div className="mb-5">
                  <h3 className="footer-heading mb-4">Recent Blog</h3>
                  <div className="block-25">
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <a href="#" className="d-flex">
                          <figure className="image mr-4">
                            <img
                              src="images/img_1.jpg"
                              alt
                              className="img-fluid"
                            />
                          </figure>
                          <div className="text">
                            <h3 className="heading font-weight-light">
                              Lorem ipsum dolor sit amet consectetur elit
                            </h3>
                          </div>
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="d-flex">
                          <figure className="image mr-4">
                            <img
                              src="images/img_1.jpg"
                              alt
                              className="img-fluid"
                            />
                          </figure>
                          <div className="text">
                            <h3 className="heading font-weight-light">
                              Lorem ipsum dolor sit amet consectetur elit
                            </h3>
                          </div>
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="d-flex">
                          <figure className="image mr-4">
                            <img
                              src="images/img_1.jpg"
                              alt
                              className="img-fluid"
                            />
                          </figure>
                          <div className="text">
                            <h3 className="heading font-weight-light">
                              Lorem ipsum dolor sit amet consectetur elit
                            </h3>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="row mb-5">
                  <div className="col-md-12">
                    <h3 className="footer-heading mb-4">Quick Menu</h3>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Matches</a>
                      </li>
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="#">Team</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Membership</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="footer-heading mb-4">Follow Us</h3>
                    <div>
                      <a href="#" className="pl-0 pr-3">
                        <span className="icon-facebook" />
                      </a>
                      <a href="#" className="pl-3 pr-3">
                        <span className="icon-twitter" />
                      </a>
                      <a href="#" className="pl-3 pr-3">
                        <span className="icon-instagram" />
                      </a>
                      <a href="#" className="pl-3 pr-3">
                        <span className="icon-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="mb-5">
                  <h3 className="footer-heading mb-4">Watch Video</h3>
                  <div className="block-16">
                    <figure>
                      <img
                        src="images/img_1.jpg"
                        alt="Image placeholder"
                        className="img-fluid rounded"
                      />
                      <a
                        href="https://vimeo.com/channels/staffpicks/93951774"
                        className="play-button popup-vimeo"
                      >
                        <span className="icon-play" />
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="mb-5">
                  <h3 className="footer-heading mb-2">Subscribe Newsletter</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    minima minus odio.
                  </p>
                  <form action="#" method="post">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control border-secondary text-white bg-transparent"
                        placeholder="Enter Email"
                        aria-label="Enter Email"
                        aria-describedby="button-addon2"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary"
                          type="button"
                          id="button-addon2"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <p>
                  {}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="icon-heart-o" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Sitewrap;
