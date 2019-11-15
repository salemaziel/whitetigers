import React from 'react'
import { Button, Row, Col } from 'reactstrap';


import '../css/style.css'
import '../css/bootstrap-grid.css'
import '../css/bootstrap-reboot.css'



const Schedroster = (props) => {
    return (
        <div className="container" style={{
            display: 'flex',
            marginBottom: '4em',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',

        }}>
            <Row style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
            }}>
               
                <Col
                style={{
                    justifyContent: 'center',

                 }}>
                    <Button prefetch href="/upcomingmatches"
                        style={{
                            padding: '1.5em 2.5em',
                            fontWeight: '900',
                            position: 'relative',
                            margin: '2px',
                        }}>View Team<br />Schedule
                    </Button>
                </Col>
                <Col style={{
                    justifyContent: 'center',

                 }}>
                    <Button prefetch href="/team"
                        style={{
                            padding: '1.5em 2.5em',
                            fontWeight: '900',
                            position: 'relative',
                            margin: '2px'
                    }}>View Team<br /> Roster
                    </Button>
                </Col>
                
                
            </Row>        
        </div>
        
    )
}

export default Schedroster