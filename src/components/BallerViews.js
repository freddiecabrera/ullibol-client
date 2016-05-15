import React from 'react'
import Header from './Header'
import { divider, MexNatFootTeam, GridView, ListView, ButtonHolder, ViewButton, EditButton } from '../../build/css/BallerViews'

const BallerViews = React.createClass({
  render () {
    document.body.style.backgroundColor = '#0e0e13'
    return (
      <div>
        <Header />

        <div className='divider' style={divider}></div>
        <div className='container-fluid'>
          <div className='row' style={{ marginTop: '3%' }}>
            <div className='col s12' style={{ marginLeft: '10%' }}>
              <h5 className='col s7' style={MexNatFootTeam}>Mexican National Football Team</h5>
              <div className='col s3' style={{ marginTop: '1%' }}>
                <a style={GridView}><i className="material-icons small">view_module</i></a>
                <a style={ListView}><i className="material-icons small">view_headline</i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
          <ul className="collection" style={{borderColor: '#0F0E13', marginLeft: '11%', marginRight: '11%'}}>
            <li className="collection-item avatar z-depth-4" style={{backgroundColor: '#17161D', maxWidth: '100%', overflowX: 'hidden'}}>
              <img src="http://media.gettyimages.com/photos/andres-guardado-of-psv-during-the-dutch-eredivisie-match-between-psv-picture-id502035286" alt="" className="circle" />
              <div style={{color: 'white'}}>
                <span className="title">Andres Guardado</span>
                <p>Midfielder</p>
              </div>
              <div style={ButtonHolder}>
                <button style={ViewButton} className='waves-effect waves-light btn'>View</button>
                <button style={EditButton} className='waves-effect waves-light btn'>Edit</button>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </div>
    )
  }
})

export default BallerViews
