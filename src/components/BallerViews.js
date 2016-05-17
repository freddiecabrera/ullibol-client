import React from 'react'
import Header from './Header'
import { divider, MexNatFootTeam, GridView, ListView, ButtonHolder, ViewButton, EditButton } from '../../build/css/BallerViews'
import axios from 'axios'
import { myMap } from '../HelperFunctions'
import { Link } from 'react-router'

const ULLIBOL_URL = 'http://ullibolserver.herokuapp.com/allfootballers/allfootballers'

const BallerViews = React.createClass({
  getInitialState () {
    return {
      allfootballersData: {},
      cardView: true
    }
  },
  componentDidMount () {
    axios.get(ULLIBOL_URL)
      .then(response => {
        const data = response.data
        const newData = myMap(data, item => {
          return JSON.parse(item)
        })

        this.setState({ allfootballersData: newData })
      })
      .catch(error => {
        console.log('axios error', error)
      })
  },
  render () {
    document.body.style.backgroundColor = '#0e0e13'
    const allfootballersData = this.state.allfootballersData
    console.log(this.props);
    return (
      <div>

        <Header />

        <div className='divider' style={divider}></div>
        <div className='container-fluid'>
          <div className='row' style={{ marginTop: '3%' }}>
            <div className='col s12' style={{ marginLeft: '10%' }}>
              <h5 className='col s7' style={MexNatFootTeam}>Mexican National Football Team</h5>
              <div className='col s3' style={{ marginTop: '1%' }}>
                <a onClick={() => this.setState({cardView: true})} style={GridView}><i className="material-icons small waves-effect waves-light">view_module</i></a>
                <a onClick={() => this.setState({cardView: false})} style={ListView}><i className="material-icons small waves-effect waves-light">view_headline</i></a>
              </div>
            </div>
          </div>
        </div>
        {this.state.cardView ?
        <div className="container-fluid" style={{marginLeft: '5.5%', marginTop: '3%'}}>
          <div className="row">
            { myMap(allfootballersData, (player) => {
                return (
                  <div key={player.name} playerName={player.name} className="col s12 m7" style={{width: '19em'}}>
                      <div className="card" style={{backgroundColor: '#17161D', color: '#444'}}>
                        <div className="card-image">
                        <img src={player.url} style={{height: '24em'}} />
                        </div>
                          <div className="card-content">
                            <i className="material-icons">account_circle</i><p style={{marginLeft: '2em', marginTop: '-13%'}}>{player.name}</p>
                            <i className="material-icons">gps_fixed</i><p style={{marginLeft: '2em', marginTop: '-13%'}}>{player.position}</p>
                            <div style={{marginLeft: '5%', marginTop: '5%'}}>
                              <Link to={`/ballerview`} params={{player: player.name}}><button style={ViewButton} className='waves-effect waves-light btn'>View</button></Link>
                              <button style={EditButton} className='waves-effect waves-light btn'>Edit</button>
                            </div>
                          </div>
                      </div>
                  </div>
                )
            })}
          </div>
        </div>
        :
        <div className="container-fluid">
          <div className="row">
            { myMap(allfootballersData, (player) => {
              return (
                <ul key={player.name} playerName={player.name} className="collection" style={{borderColor: '#0F0E13', marginLeft: '11%', marginRight: '11%'}}>
                  <li className="collection-item avatar z-depth-4" style={{backgroundColor: '#17161D', maxWidth: '100%', overflowX: 'hidden'}}>
                    <img src={player.url} alt="" className="circle" style={{width: '44px', height: '64px', borderRadius: '2%'}} />
                    <div style={{color: 'white', color: '#444'}}>
                      <span className="title">{player.name}</span>
                      <p>{player.position}</p>
                    </div>
                    <div style={ButtonHolder}>
                    <Link to={`/ballerview`} params={{ player: player.name }}><button style={ViewButton} className='waves-effect waves-light btn'>View</button></Link>
                      <button style={EditButton} className='waves-effect waves-light btn'>Edit</button>
                    </div>
                  </li>
                </ul>
              )
            })}
            </div>
          </div>}

      </div>
    )
  }
})

export default BallerViews
