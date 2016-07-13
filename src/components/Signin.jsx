import React from 'react'
import { reduxForm } from 'redux-form'


const Signin = React.createClass({
  render() {
    return (
      <form>
        <div className='row'>
          <div className='col s12'>
            <div className='login-form col s4 push-s4'>
              <input placeholder='Email' id='email' type='email' className='validate' />
              <input placeholder='Password' id='password' type='password' className='validate' />
              <button style={{backgroundColor: '#5E44FD'}} className='btn col s12 waves-effect waves-light'>Sign in</button>
              <p style={{color: '#efefef', fontSize: '12px', marginTop: '3.4em'}}>Sign up</p>
            </div>
          </div>
        </div>
      </form>
    )
  }
})

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin)
