import React from 'react'
import { Table } from 'reactstrap';

import '../css/style.css'
import '../css/bootstrap-grid.css'
import '../css/bootstrap-reboot.css'
import '../css/bootstrap.min.css'


const Standings = (props) => {
    return (
        <div style={{
            marginBottom: '4rem',
        }}>
    <div className="container">
        <h3 style={{
                fontSize: '45px',
                textAlign: 'center',
                textTransform: 'uppercase',
            }}>
            Standings
        </h3>
      <Table dark striped hover responsive >
        <thead>
          <tr style={{
              backgroundColor: 'rgb(191, 191, 191, 0.5)',
              lineHeight: '2.1rem',
          }}>
            <th>Place</th>
            <th>Team</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{
              backgroundColor: '#395974',
              color: 'white',
              textTransform: 'uppercase',
              fontWeight: 'bold',
          }}
          >
            <th scope="row">1</th>
            <td style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
            }}
            >San Diego White Tigers FC</td>
            <td>6</td>
            <td>0</td>
            <td>0</td>
            <td>18</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>SD Internacional FC</td>
            <td>4</td>
            <td>1</td>
            <td>1</td>
            <td>13</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Santos FC</td>
            <td>3</td>
            <td>1</td>
            <td>2</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>SD Premier Pros Academy</td>
            <td>2</td>
            <td>1</td>
            <td>3</td>
            <td>7</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>SD Premier Soccer Club</td>
            <td>2</td>
            <td>1</td>
            <td>3</td>
            <td>7</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Rebels SC</td>
            <td>2</td>
            <td>0</td>
            <td>4</td>
            <td>6</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>PSC San Diego</td>
            <td>0</td>
            <td>0</td>
            <td>6</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>
      </div>
      </div>
    );
  }
  
  export default Standings