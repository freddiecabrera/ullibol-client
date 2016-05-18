import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import MasterPage from './components/MasterPage'
import IndexPage from './components/IndexPage'
import BallerViews from './containers/BallerViews'
import Baller from './components/Baller'
import { Provider } from 'react-redux'
import store from './store'

const myRoutes = props => (
  <Route path='/' component={MasterPage}>
    <IndexRoute component={IndexPage} />
    <Route path='ballerviews' component={BallerViews} />
    <Route path='ballerview/:player' component={Baller} />
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
