import React from 'react'


import '../css/style.css'
import '../css/bootstrap-grid.css'
import '../css/bootstrap-reboot.css'
import '../css/bootstrap.min.css'


class Watchlive extends React.Component {
    render() {
        return (
                <div className="container" >

                    <h3 
                        style={{
                            fontSize: '45px',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                        }}>
                        Watch Live
                    </h3>
                       <div style={{
                           paddingLeft: '2em',
                       }}>
                    <iframe src="https://mycujoo.tv/embed/729?id=82317&shareSource=EM_EM" min-width="468px" allowfullscreen></iframe>
                    </div>

                </div>    
        );
    }
}

export default Watchlive