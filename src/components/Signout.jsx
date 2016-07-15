import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Header from './Header'
import * as actions from '../actions'

const Signout = React.createClass({
  componentWillMount () {
    this.props.signoutUser()
  },
  render () {
    if (typeof document !== 'undefined') {
      document.body.style.backgroundColor = 'white'
    }
    return (
      <div>
      <div style={{marginBottom: '12%'}}>
        <Link to={'/'}><h1 style={{marginTop: '6%', marginLeft: '11%'}} className='HeaderLogo'>Ullibol</h1></Link>
      </div>

        <div className="dialogbox signout-dialog">
          <div style={{width: '280px'}} className="body">
            <span className="tip tip-right"></span>
            <div className="message">
              <span style={{marginLeft: '33%'}}>Dont go!!!</span>
            </div>
          </div>
        </div>
        <img className='pogba' src='https://d13yacurqjgara.cloudfront.net/users/324102/screenshots/1486675/pogba-dribbble.jpg' />
      </div>
    )
  }
})

export default connect(null, actions)(Signout)
