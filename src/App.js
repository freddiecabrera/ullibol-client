import React from 'react'
import ReactDOM from 'react-dom'
import { IndexRoute, Route, browserHistory } from 'react-router'
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath'
import { MasterPage, IndexPage, LoginPage, RegisterPage, ResetPasswordPage, VerifyEmailPage, ProfilePage, BallerViews, Header, Baller } from './components'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
ReactStormpath.init()

ReactDOM.render(
    <Router history={browserHistory}>
      <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
        <Route path='/verify' component={VerifyEmailPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/forgot' component={ResetPasswordPage} />
        <AuthenticatedRoute>
          <HomeRoute path='/ballerviews' component={BallerViews} />
          <Route path='/ballerview' component={Baller} />
          <Route path='profile' component={ProfilePage} />
        </AuthenticatedRoute>
      </HomeRoute>
    </Router>,
  document.getElementById('app')
)
