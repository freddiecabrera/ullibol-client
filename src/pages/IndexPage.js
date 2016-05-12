import { Link } from 'react-router'
import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import { LoginForm } from 'react-stormpath'
import { loginCard, IndexPageInputFields, IndexPageLoginButton, IndexPageForgotPassword  } from '../../build/css/style.js'

const IndexPage = React.createClass({
  render () {
    return (
      <div>
        <LoginForm>
        <div className='IndexPageTitleContianer'>
          <h1 className='title-logo eleven columns'>Ullibol</h1>
          <p>Welcome to Ullibol | Bienvenido a Ullibol</p>
        </div>
        <div className='row'>
          <div className='col s12 m5'>
            <div className='card-panel z-depth-1' style={loginCard}>
              <img className='IndexPageMexicoLogo' src='http://bit.ly/1Oo4wPS' />
              <p className='IndexPageCardParagraph'>
              This is a data visulization app
              dedicated to the <br /> Mexican Nation
              Football Team that will be <br />attending
              the Copa America Centenario USA 2016.
              </p>
              <div className='IndexPageVerticalLine'></div>
              <div style={IndexPageInputFields}>
                <h5 className='IndexPageLoginText'>Login</h5>
                <div className="input-field">
                  <input type='text' name="username" ></input>
                  <label>Email</label>
                </div>
                <div className="input-field">
                  <input type="password" name='password'></input>
                  <label>Password</label>
                  <button style={IndexPageLoginButton} className="btn waves-effect waves-light" type="submit" value="Login">Login</button>
                  <Link to='forgot'><p style={IndexPageForgotPassword}>Forgot your password?</p></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </LoginForm>
      </div>
    )
  }
})

export default IndexPage

{/*<ol className="lead">
  <li><Link to="/register">Registration</Link></li>
  <li><LoginLink /></li>
  <li><Link to="/forgot">Forgot Password</Link></li>
  <li><Link to="/profile">Custom Profile Data</Link></li>
</ol>*/}
