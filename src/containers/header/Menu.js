import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/HeaderAction'

const style = {
  backgroundColor: 'yellow',
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  zIndex: '1000'
}

const Menu = props => (
  <div style={style}>
    <li>Home</li>
    <li>Profile</li>
    <li>Sign Out</li>
    <div className="fixed-action-btn horizontal click-to-toggle" style={{top: '45px', right: '15%'}}>
        <i onClick={() => this.setState({ authenticated: false })} className="material-icons">clear</i>
    </div>
  </div>
)

export default Menu
