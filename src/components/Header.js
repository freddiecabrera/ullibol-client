import React from 'react'
import { Menu, MenuLinks } from '../../build/css/Header'
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
        <div style={MenuLinks}>
          <Link to='ballerviews'><h1>Home</h1></Link>
          <Link to='Profile'><h1>Profile</h1></Link>
          <LogoutLink><h1>Sign Out</h1></LogoutLink>
        </div>
        <div className="fixed-action-btn horizontal click-to-toggle" style={{top: '10%', right: '11%'}}>
            <i onClick={() => this.setState({ authenticated: false })} className="material-icons" style={{fontSize: '3em'}}>clear</i>
        </div>
      </div> :
      <div style={{marginBottom: '20%'}}>
        <div className="fixed-action-btn horizontal click-to-toggle" style={{top: '4%', left: '11%'}}>
          <h1 className='HeaderLogo'>Ullibol</h1>
        </div>
        <div className="fixed-action-btn horizontal click-to-toggle" style={{top: '10%', right: '11%'}}>
          <div onClick={() => this.setState({ authenticated: true })} className="waves-effect waves-light btn btn-floating btn-large red">
            <i className="material-icons">menu</i>
          </div>
        </div>
      </div>
    )
  }
})

export default Header
