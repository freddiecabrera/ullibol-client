import React from 'react'
import ReactDOM from 'react-dom'
import { IndexRoute, Route, browserHistory } from 'react-router'
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath'
import { MasterPage, IndexPage, LoginPage, RegisterPage, ResetPasswordPage, VerifyEmailPage, ProfilePage, BallerViews, Header } from './components'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const store = createStore(reducers, compose(
  applyMiddleware(reduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactStormpath.init({
  dispatcher: {
    type: 'redux',
    store: store
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
        <Route path='/verify' component={VerifyEmailPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/forgot' component={ResetPasswordPage} />
        <AuthenticatedRoute>
          <HomeRoute path='/ballerview' component={BallerViews} />
          <Route path='profile' component={ProfilePage} />
        </AuthenticatedRoute>
      </HomeRoute>
    </Router>
  </Provider>,
  document.getElementById('app')
)
