import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import MasterPage from './components/MasterPage'
import IndexPage from './components/IndexPage'
import BallerViews from './containers/BallerViews'
import Baller from './containers/Baller'
import Signout from './components/Signout'
import Signup from './components/Signup'
import RequireAuth from './containers/RequireAuth'
import { Provider } from 'react-redux'
import store from './store'

const myRoutes = props => (
  <Route path='/' component={MasterPage}>
    <IndexRoute component={IndexPage} />
    <Route path='ballerviews' component={RequireAuth(BallerViews)} />
    <Route path='ballerview/:player' component={RequireAuth(Baller)} />
    <Route path='signout' component={Signout} />
    <Route path='signup' component={Signup} />
  </Route>
)

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
})

App.Routes = myRoutes

module.exports = App
