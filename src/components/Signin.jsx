import React from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router'
import * as actions from '../actions'


const Signin = React.createClass({
  handleFormSubmit () {
    console.log(email.value, password.value);
    console.log('hit');
    this.props.signinUser({ email: email.value, password: password.value})
  },
  render() {
    console.log(this.props)
    const { handleSubmit, fields: { email, password } } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <div className='row'>
          <div className='col s12'>
            <div className='login-form col s4 push-s4'>
              <input {...email} placeholder='Email' type='email' id='email'  className='validate' />
              <input {...password} placeholder='Password' type='password' id='password' className='validate' />
              <button action='submit' style={{backgroundColor: '#5E44FD'}} className='btn col s12 waves-effect waves-light'>Sign in</button>
              <Link to={'signup'}><p style={{color: '#efefef', fontSize: '12px', marginTop: '3.4em'}}>Sign up</p></Link>
              {this.props.signinError ? <div className="dialogbox-container">
                <div className="dialogbox">
                  <div className="body">
                    <span className="tip tip-up"></span>
                    <div className="message">
                      <span>You entered the wrong email or password!</span>
                    </div>
                  </div>
                </div>
              </div> : null}
            </div>
          </div>
        </div>
      </form>
    )
  }
})

const mapStateToProps = state => ({
  signinError: state.UserInteractionsReducer.error
})

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin)
