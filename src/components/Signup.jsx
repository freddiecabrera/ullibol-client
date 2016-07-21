import React from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router'
import * as actions from '../actions'

const Signup = React.createClass({
  handleFormSubmit (formProps) {
    this.props.signupUser(formProps)
  },
  render () {
    const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props
    return (
      <div>
        <div className='container'>
          <div className='IndexPageTitleContianer'>
            <h1 className='title-logo'>Ullibol</h1>
            <p>Welcome to Ullibol | Bienvenido a Ullibol</p>
          </div>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>
            <div className='row'>
              <div className='col s12'>
                <div className='login-form col s4 push-s4'>
                  <input {...email} placeholder='Email' type='email' id='email'  className='validate' />
                  {email.touched && email.error && <div style={{color: '#F50057', fontSize: '10px'}}>{email.error}</div>}
                  <input {...password} placeholder='Password' type='password' id='password' className='validate' />
                  {password.touched && password.error && <div style={{color: '#F50057', fontSize: '10px'}}>{password.error}</div>}
                  <input {...passwordConfirm} placeholder='Confirm Password' type='password' id='password' className='validate' />
                  {passwordConfirm.touched && passwordConfirm.error && <div style={{color: '#F50057', fontSize: '10px'}}>{passwordConfirm.error}</div>}
                  <button action='submit' style={{backgroundColor: '#5E44FD'}} className='btn col s12 waves-effect waves-light'>Sign up</button>
                  <Link to={'/'}><p style={{color: '#efefef', fontSize: '12px', marginTop: '3.4em'}}>Sign in</p></Link>

                  {this.props.errorMessage === 'Email is in use' ? <div className="dialogbox-container">
                    <div className="dialogbox">
                      <div className="body">
                        <span className="tip tip-up"></span>
                        <div className="message">
                          <span>{this.props.errorMessage}</span>
                        </div>
                      </div>
                    </div>
                  </div> : null}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
})

const mapStateToProps = state => ({
  errorMessage: state.UserInteractionsReducer.error
})

const validate = formProps => {
  const errors = {}

  !formProps.email ? errors.email = 'Please enter an email' : null
  !formProps.password ? errors.password = 'Please enter an password' : null
  !formProps.passwordConfirm ? errors.passwordConfirm = 'Please enter a password confirmation' : null
  formProps.password !== formProps.passwordConfirm ? errors.password = 'Passwords must match!' : null

  return errors
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup)
