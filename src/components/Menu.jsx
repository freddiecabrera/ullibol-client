import React from 'react'
import { MenuHolder, MenuStyle, MenuLinks } from '../../public/css/Header'
import { Link } from 'react-router'

const Menu = props => (
  <div className='card-action' style={MenuStyle}>
    <div style={MenuHolder}>
      <Link to='ballerviews'><span className='waves-effect waves-light' style={MenuLinks}>Home</span></Link>
      <Link to='Profile'><span className='waves-effect waves-light' style={MenuLinks}>Profile</span></Link>
      <span className='waves-effect waves-light' style={MenuLinks}>About</span>
      <span className='waves-effect waves-light' style={MenuLinks}>Contact</span>
      <Link onClick={props.toggleMenu.bind(null, false)} to={'/signout'}><span className='waves-effect waves-light' style={MenuLinks}>Sign Out</span></Link>
    </div>
    <div className='fixed-action-btn horizontal click-to-toggle' style={{top: '10%', right: '11%'}}>
      <i onClick={props.toggleMenu.bind(null, false)} className='material-icons waves-effect waves-light' style={{fontSize: '3em', cursor: 'pointer'}}>clear</i>
    </div>
  </div>
)

Menu.propTypes = {
  toggleMenu: React.PropTypes.func
}

export default Menu
