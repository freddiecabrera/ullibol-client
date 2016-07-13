import { Link } from 'react-router'
import React from 'react'
import { loginCard, IndexPageInputFields, IndexPageLoginButton, IndexPageForgotPassword, IndexPageSignup } from '../../public/css/IndexPage.js'
import Signin from './Signin'

const IndexPage = React.createClass({
  render () {
    return (
      <div>
        <div className='container'>
          <div className='IndexPageTitleContianer'>
            <h1 className='title-logo'>Ullibol</h1>
            <p>Welcome to Ullibol | Bienvenido a Ullibol</p>
          </div>
          <Signin />
        </div>
      </div>
    )
  }
})

export default IndexPage
