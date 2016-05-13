import React from 'react';
import { Link } from 'react-router'
import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath'
import { logo } from '../../build/css/Header.js'

const Header = () => (
      <div style={{marginBottom: '20%'}}>
      <div className="fixed-action-btn horizontal click-to-toggle" style={{top: '20px', left: '15%'}}>
        <h1 className='HeaderLogo'>Ullibol</h1>
      </div>
      <div className="fixed-action-btn horizontal click-to-toggle" style={{top: '45px', right: '15%'}}>
        <Link to='menu' className="waves-effect waves-light btn btn-floating btn-large red">
          <i className="material-icons">menu</i>
        </Link>
      </div>
      </div>
)

export default Header
