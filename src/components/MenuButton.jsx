import React from 'react'
import { menuButton } from '../../public/css/Header'
const MenuButton = props => (
  <div style={{marginBottom: '12%'}}>
    <h1 style={{marginTop: '6%', marginLeft: '11%'}} className='HeaderLogo'>Ullibol</h1>
    <div className='fixed-action-btn horizontal click-to-toggle' style={{top: '10%', right: '11%'}}>
      <div onClick={props.toggleMenu.bind(null, true)} className='waves-effect waves-light btn btn-floating btn-large' style={menuButton}>
        <i className='material-icons' style={{color: '#444'}}>menu</i>
      </div>
    </div>
  </div>
)

MenuButton.propTypes = {
  toggleMenu: React.PropTypes.func
}

export default MenuButton
