import { Link } from 'react-router'
import React, { PropTypes } from 'react'
import { loginCard, IndexPageInputFields, IndexPageLoginButton, IndexPageForgotPassword, IndexPageSignup  } from '../../public/css/IndexPage.js'

const IndexPage = React.createClass({
  render () {
    // document.body.style.backgroundColor = "red"
    return (
      <div>
        <div className='IndexPageTitleContianer'>
          <h1 className='title-logo eleven columns'>Ullibol</h1>
          <p>Welcome to Ullibol | Bienvenido a Ullibol</p>
        </div>
        <div className='row'>
          <div className='col s12 m5'>
            <div className='card-panel z-depth-1' style={loginCard}>
              <img className='IndexPageMexicoLogo' src='http://bit.ly/1Oo4wPS' />
              <p className='IndexPageCardParagraph'>
              This is a data visualization app dedicated to the <br />
              players of The Mexican Nation Football Team that <br />
              will be attending the Copa America Centenario <br />
              USA 2016. ©2016 Freddie Cabrera.
              </p>
              <div className='IndexPageVerticalLine'></div>
              <div style={IndexPageInputFields}>
                <h5 className='IndexPageLoginText'>Login</h5>
                <div className="input-field">
                  <input type='text' name="username"></input>
                  <label>Email</label>
                </div>
                <div className="input-field">
                  <input type="password" name='password'></input>
                  <label>Password</label>
                  <div className="row">
                    <div className="col s12">
                    <button style={IndexPageLoginButton} className="btn waves-effect waves-light col s5" type="submit" value="Login">Login</button>
                    </div>
                  </div>
                  <div className='row'>
                    <div className="col s12" style={{marginTop: '-1em'}}>
                      <Link to='forgot'><span style={IndexPageForgotPassword}>Forgot your password?</span></Link>
                      <Link to='register'><span style={IndexPageSignup}>Sign Up</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default IndexPage