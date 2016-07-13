import React from 'react'
import { ViewButton, EditButton } from '../../public/css/BallerViews'
import { Link } from 'react-router'

const GridView = props => (
  <div className='container-fluid' style={{marginLeft: '5.5%', marginTop: '3%'}}>
    <div className='row'>
      {props.allfootballersData.map((player, index) => {
        return (
          <div key={index} playerName={player.name} className='col s12 m7' style={{width: '19em'}}>
            <div className='card' style={{backgroundColor: '#17161D', color: '#444'}}>
              <div className='card-image'>
                <img src={player.url} style={{height: '24em'}} />
              </div>
              <div className='card-content'>
                <i className='material-icons'>account_circle</i><p style={{marginLeft: '2em', marginTop: '-13%'}}>{player.name}</p>
                <i className='material-icons'>gps_fixed</i><p style={{marginLeft: '2em', marginTop: '-13%'}}>{player.position}</p>
                <div style={{marginLeft: '5%', marginTop: '5%'}}>
                  <Link to={`ballerview/${player.name}`}>
                    <button style={ViewButton} className='waves-effect waves-light btn'>View</button>
                  </Link>
                  <button style={EditButton} className='waves-effect waves-light btn'>Edit</button>
                </div>
              </div>
            </div>
          </div>
          )
      })}
    </div>
  </div>
)

GridView.propTypes = {
  allfootballersData: React.PropTypes.array
}

export default GridView
