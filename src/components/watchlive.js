import React from 'react'


class Watchlive extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 
                style={{
                    fontSize: '60px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                }}>
                    Watch Live
                </h1>
                <video style={{
                    height: '720px',
                    width: '1080px',
                    backgroundColor: "black",
                    zIndex: '1000',
                    marginBottom: '4em',
                }}
                ></video>


            </div>
        );
    }
}

export default Watchlive