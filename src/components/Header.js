import React from 'react'
import { Menu, MenuLinks, MenuHolder, menuButton } from '../../build/css/Header'
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
          <Link to='ballerviews'><span className='waves-effect waves-light' style={MenuLinks}>Home</span></Link>
          <Link to='Profile'><span className='waves-effect waves-light' style={MenuLinks}>Profile</span></Link>
          <span className='waves-effect waves-light' style={MenuLinks}>About</span>
          <span className='waves-effect waves-light' style={MenuLinks}>Contact</span>
          <LogoutLink><span className='waves-effect waves-light' style={MenuLinks}>Sign Out</span></LogoutLink>
        </div>
        <div className="fixed-action-btn horizontal click-to-toggle" style={{top: '10%', right: '11%'}}>
            <i onClick={() => this.setState({ authenticated: false })} className="material-icons waves-effect waves-light" style={{fontSize: '3em', cursor: 'pointer'}}>clear</i>
        </div>
      </div> :
      <div style={{marginBottom: '12%'}}>
        <h1 style={{marginTop: '6%', marginLeft: '11%'}} className='HeaderLogo'>Ullibol</h1>
        <div className="fixed-action-btn horizontal click-to-toggle" style={{top: '10%', right: '11%'}}>
          <div onClick={() => this.setState({ authenticated: true })} className="waves-effect waves-light btn btn-floating btn-large" style={menuButton}>
            <i className="material-icons" style={{color: '#444'}}>menu</i>
          </div>
        </div>
      </div>
    )
  }
})

export default Header
