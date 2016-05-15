import React from 'react'
import { Menu, MenuLinks, MenuHolder } from '../../build/css/Header'
import { Link } from 'react-router'
import { LoginLink, LogoutLink } from 'react-stormpath'

const Header = React.createClass({
  getInitialState () {
    return {
      authenticated: false
    }
  },
  render () {
    return (
      this.state.authenticated ?
      <div className="card-action" style={Menu}>
        <div style={MenuHolder}>
          <Link to='ballerviews'><h1 style={MenuLinks}>Home</h1></Link>
          <Link to='Profile'><h1 style={MenuLinks}>Profile</h1></Link>
          <LogoutLink><h1 style={MenuLinks}>Sign Out</h1></LogoutLink>
        </div>
        <div className="fixed-action-btn horizontal click-to-toggle" style={{top: '10%', right: '11%', zIndex: '0'}}>
            <i onClick={() => this.setState({ authenticated: false })} className="material-icons" style={{fontSize: '3em', cursor: 'pointer'}}>clear</i>
        </div>
      </div> :
      <div style={{marginBottom: '12%'}}>
        <h1 style={{marginTop: '6%', marginLeft: '11%', zIndex: '0'}} className='HeaderLogo'>Ullibol</h1>
        <div className="fixed-action-btn horizontal click-to-toggle" style={{top: '10%', right: '11%'}}>
          <div onClick={() => this.setState({ authenticated: true })} className="waves-effect waves-light btn btn-floating btn-large red accent-3">
            <i className="material-icons">menu</i>
          </div>
        </div>
      </div>
    )
  }
})

export default Header
