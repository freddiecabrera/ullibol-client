import React from 'react'
import Header from './Header'
import { divider, MexNatFootTeam, GridView, ListView, ButtonHolder, ViewButton, EditButton } from '../../build/css/BallerViews'
import axios from 'axios'
import { myEach, myMap } from '../HelperFunctions'

const ULLIBOL_URL = 'http://ullibolserver.herokuapp.com/allfootballers/allfootballers'

const BallerViews = React.createClass({
  getInitialState () {
    return {
      allfootballersData: {}
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
    const allfootballersData = this.state.allfootballersData;
    console.log(allfootballersData);
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
          { myMap(allfootballersData, (player) => {
            return (
              <ul key={player.name} className="collection" style={{borderColor: '#0F0E13', marginLeft: '11%', marginRight: '11%'}}>
                <li className="collection-item avatar z-depth-4" style={{backgroundColor: '#17161D', maxWidth: '100%', overflowX: 'hidden'}}>
                  <img src={player.url} alt="" className="circle" style={{width: '44px', height: '64px', borderRadius: '2%'}} />
                  <div style={{color: 'white'}}>
                    <span className="title">{player.name}</span>
                    <p>{player.position}</p>
                  </div>
                  <div style={ButtonHolder}>
                    <button style={ViewButton} className='waves-effect waves-light btn'>View</button>
                    <button style={EditButton} className='waves-effect waves-light btn'>Edit</button>
                  </div>
                </li>
              </ul>
            )
          })}
          </div>
        </div>

      </div>
    )
  }
})

export default BallerViews
