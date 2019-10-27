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
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                           marginBottom: '6rem',
                       }}>
                    <iframe src="https://mycujoo.tv/embed/729?id=82317&shareSource=EM_EM" width="560px" height="315px" frameborder="0" overflow="hidden" allowfullscreen></iframe>
                    </div>

                </div>    
        );
    }
}

export default Watchlive