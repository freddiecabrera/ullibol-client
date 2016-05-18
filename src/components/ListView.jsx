import React from 'react'
import { Link } from 'react-router'
import { myMap } from '../HelperFunctions'
import { ViewButton, EditButton, ButtonHolder } from '../../public/css/BallerViews'

const ListView = props => (
  <div className='container-fluid'>
    <div className='row'>
      {myMap(props.allfootballersData, (player) => {
        return (
          <ul key={player.name} playerName={player.name} className='collection' style={{borderColor: '#0F0E13', marginLeft: '11%', marginRight: '11%'}}>
            <li className='collection-item avatar z-depth-4' style={{backgroundColor: '#17161D', maxWidth: '100%', overflowX: 'hidden'}}>
              <img src={player.url} className='circle' style={{width: '44px', height: '64px', borderRadius: '2%'}} />
              <div style={{color: '#444'}}>
                <span className='title'>{player.name}</span>
                <p>{player.position}</p>
              </div>
              <div style={ButtonHolder}>
                <Link to='/ballerview' params={{ player: player.name }}><button style={ViewButton} className='waves-effect waves-light btn'>View</button></Link>
                <button style={EditButton} className='waves-effect waves-light btn'>Edit</button>
              </div>
            </li>
          </ul>
        )
      })}
    </div>
  </div>
)

ListView.propTypes = {
  allfootballersData: React.PropTypes.array
}

export default ListView
