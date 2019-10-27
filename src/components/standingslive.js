import React from 'react'
import Standings from './standings'
import Watchlive from './watchlive'


import '../css/style.css'
import '../css/bootstrap-grid.css'
import '../css/bootstrap-reboot.css'
import '../css/bootstrap.min.css'

class Standingslive extends React.Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="inline-flex flex-center">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                    <Standings />
                </div>
                <div className="col-lg-5">    
                    <Watchlive />
                </div>
                <div className="col-lg-1"></div>
            </div>
            </div>
            </div>

        )
    }
}

export default Standingslive