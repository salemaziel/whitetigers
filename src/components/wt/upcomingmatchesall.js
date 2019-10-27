import React from "react";


import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'

import Upsl from '../../images/upsl-logo.png'
import Wtlogo from '../../images/whitetigerslogo-139x150.png'
import Sdifc from '../../images/sd-international-fc.png'
import Sdppa from '../../images/sd-pro-premier-academy-139x150.png'
import Santosfc from '../../images/santosfc.png'
import Rebels from '../../images/rebels-sc.png'
import Pscsd from '../../images/psc-sandiego.png'


class Upcomingmatchesall extends React.Component {
  render() {
    return (
      <>
      <div className="bgheromatches">

        <div className="matchestop">
          <div className="col-md-12">
    
            <h1
              style={{
                textAlign: 'center',
                fontSize: '32px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                padding: '2rem',
              }}
            >
              Upcoming Matches
            </h1>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <h2 
            style={{
              textAlign:'center',
              fontSize: '2rem',
              fontWeight: '900',
            }}
            >Home</h2>
            </div>
            <div className="col-lg-4">
            <h2 
            style={{
              textAlign:'center',
              fontSize: '2rem',
              fontWeight: '900',
            }}
            >vs</h2>
            </div>
            <div className="col-lg-4">
            <h2 
            style={{
              textAlign:'center',
              fontSize: '2rem',
              fontWeight: '900',
            }}
            >Away</h2>
          </div>
          </div>
          </div>

        <div className="container">
        <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="text-center text-lg-left">
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                  <img
                    src={Wtlogo}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h3 className="h5 mb-0 text-black">White Tigers FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
            <div className="d-inline-block">
              <h6 className="h6 mb-0 text-black text-center text-uppercase">
                Sept 15 / 4:00 PM
                <br />
                Ramona High School
              </h6>
              <br />
              <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                <span className="h5">0:0</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center text-lg-right">
            <div className>
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                  <img
                    src={Sdifc}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text order-1 w-100">
                  <h3 className="h5 mb-0 text-black">SD Internacional FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="text-center text-lg-left">
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                  <img
                    src={Rebels}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h3 className="h5 mb-0 text-black">Rebels SC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
            <div className="d-inline-block">
              <h6 className="h6 mb-0 text-black text-center text-uppercase">
                Sept 22 / 6:00 PM
                <br />
                Southwestern College
              </h6>
              <br />
              <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                <span className="h5">0:0</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center text-lg-right">
            <div className>
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                  <img
                    src={Wtlogo}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text order-1 w-100">
                  <h3 className="h5 mb-0 text-black">White Tigers FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="text-center text-lg-left">
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                  <img
                    src={Wtlogo}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h3 className="h5 mb-0 text-black">White Tigers FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
            <div className="d-inline-block">
              <h6 className="h6 mb-0 text-black text-center text-uppercase">
                Oct 6 / 4:00 PM
                <br />
                Ramona High School
              </h6>
              <br />
              <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                <span className="h5">0:0</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center text-lg-right">
            <div className>
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                  <img
                    src={Sdppa}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text order-1 w-100">
                  <h3 className="h5 mb-0 text-black">
                    SD Premier Pros Academy
                  </h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="text-center text-lg-left">
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                  <img
                    src={Pscsd}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h3 className="h5 mb-0 text-black">PSC San Diego</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
            <div className="d-inline-block">
              <h6 className="h6 mb-0 text-black text-center text-uppercase">
                Oct 13 / 7:00 PM
                <br />
                Southwestern College
              </h6>
              <br />
              <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                <span className="h5">0:0</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center text-lg-right">
            <div className>
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                  <img
                    src={Wtlogo}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text order-1 w-100">
                  <h3 className="h5 mb-0 text-black">White Tigers FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        {}
        <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="text-center text-lg-left">
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                  <img
                    src={Wtlogo}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h3 className="h5 mb-0 text-black">White Tigers FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
            <div className="d-inline-block">
              <h6 className="h6 mb-0 text-black text-center text-uppercase">
                Oct 20 / 4:00 PM
                <br />
                Monte Vista High School
              </h6>
              <br />
              <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                <span className="h5">0:0</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center text-lg-right">
            <div className>
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                  <img
                    src={Santosfc}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text order-1 w-100">
                  <h3 className="h5 mb-0 text-black">Santos FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        {}



          {/** where left off.. 10/26 */}


        <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="text-center text-lg-left">
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                  <img
                    src={Sdppa}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h3 className="h5 mb-0 text-black">
                    SD Premier Pros Academy
                  </h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
            <div className="d-inline-block">
              <h6 className="h6 mb-0 text-black text-center text-uppercase">
                Oct 26 / 7:00 PM
                <br />
                Lincoln High School Stadium
              </h6>
              <br />
              <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                <span className="h5">0:0</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center text-lg-right">
            <div className>
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                  <img
                    src={Wtlogo}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text order-1 w-100">
                  <h3 className="h5 mb-0 text-black">White Tigers FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        {}
        <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="text-center text-lg-left">
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                  <img
                    src={Sdifc}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h3 className="h5 mb-0 text-black">SD Internacional FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
            <div className="d-inline-block">
              <h6 className="h6 mb-0 text-black text-center text-uppercase">
                Nov 3 / 4:30 PM
                <br />
                Mission Bay High School
              </h6>
              <br />
              <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                <span className="h5">0:0</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center text-lg-right">
            <div className>
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                  <img
                    src={Wtlogo}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text order-1 w-100">
                  <h3 className="h5 mb-0 text-black">White Tigers FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        {}
        <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="text-center text-lg-left">
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                  <img
                    src={Wtlogo}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h3 className="h5 mb-0 text-black">White Tigers FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
            <div className="d-inline-block">
              <h6 className="h6 mb-0 text-black text-center text-uppercase">
                Nov 10 / 4:00 PM
                <br />
                Ramona High School/h6>
                <br />
                <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                  <span className="h5">0:0</span>
                </div>
              </h6>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center text-lg-right">
            <div className>
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                  <img
                    src={Rebels}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text order-1 w-100">
                  <h3 className="h5 mb-0 text-black">Rebels SC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        {}
        <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="text-center text-lg-left">
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                  <img
                    src={Wtlogo}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h3 className="h5 mb-0 text-black">White Tigers FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
            <div className="d-inline-block">
              <h6 className="h6 mb-0 text-black text-center text-uppercase">
                Nov 24 / 4:00 PM
                <br />
                Ramona High School
              </h6>
              <br />
              <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                <span className="h5">0:0</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center text-lg-right">
            <div className>
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                  <img
                    src={Sdppa}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text order-1 w-100">
                  <h3 className="h5 mb-0 text-black">
                    SD Premier Pros Academy
                  </h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        {}
        <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="text-center text-lg-left">
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                  <img
                    src={Wtlogo}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h3 className="h5 mb-0 text-black">White Tigers FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
            <div className="d-inline-block">
              <h6 className="h6 mb-0 text-black text-center text-uppercase">
                Dec 1 / 4:00 PM
                <br />
                Ramona High School
              </h6>
              <br />
              <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                <span className="h5">0:0</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center text-lg-right">
            <div className>
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                  <img
                    src={Pscsd}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text order-1 w-100">
                  <h3 className="h5 mb-0 text-black">PSC San Diego</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        {}
        <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="text-center text-lg-left">
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                  <img
                    src={Santosfc}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text">
                  <h3 className="h5 mb-0 text-black">Santos FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
            <div className="d-inline-block">
              <h6 className="h6 mb-0 text-black text-center text-uppercase">
                Dec 7 / 8:00 PM
                <br />
                Lincoln High School Stadium
              </h6>
              <br />
              <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                <span className="h5">0:0</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center text-lg-right">
            <div className>
              <div className="d-block d-lg-flex align-items-center">
                <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                  <img
                    src={Wtlogo}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text order-1 w-100">
                  <h3 className="h5 mb-0 text-black">White Tigers FC</h3>
                  <span className="text-uppercase small country">
                    San Diego
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
      </div>
      </div>
      </>
    );
  }
}

export default Upcomingmatchesall
