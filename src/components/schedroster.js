import React from 'react'
import { Button, Row, Col } from 'reactstrap';


import '../css/style.css'
import '../css/bootstrap-grid.css'
import '../css/bootstrap-reboot.css'



const Schedroster = (props) => {
    return (
        <div className="container" style={{
            marginBottom: '4em',
        }}>
            <Row>
                <Col xs="6" 
                    style={{
                        justifyContent: 'right',
                        textAlign: 'right',
                     }}>
                    <Button prefetch href="/upcomingmatches"
                        style={{
                            padding: '2em 3em',
                            fontWeight: '900',
                            fontSize: '1.2em',
                        }}>View Schedule</Button>
                </Col>
                <Col xs="6"
                style={{
                    justifyContent: 'left',
                    textAlign: 'left',
                 }}>
                    <Button prefetch href="/team"
                    style={{
                        padding: '2em 3em',
                        fontWeight: '900',
                        fontSize: '1.2em',
                    }}>View Roster</Button>
                </Col>
            </Row>        
        </div>
        
    )
}

export default Schedroster