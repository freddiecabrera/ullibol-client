import React from 'react'
import Loader from '../components/Loader'
import { connect } from 'react-redux'
import * as actions from '../actions'
const { func, object } = React.PropTypes

const Baller = React.createClass({
  propTypes: {
    getPlayerData: func,
    params: object,
    playerData: object
  },
  componentWillMount () {
    // const player = encodeURI(this.props.params.player)
    this.props.getPlayerData('andres guardado')
  },
  render () {
    const playerData = this.props.playerData
    const fetching = this.props.fetching
    console.log(this.props.fetching)
    console.log(this.props.playerData)
    return (
      <div>
        {fetching ? <Loader /> : <h1>Hello</h1>}
      </div>
    )
  }
})

function mapStateToProps (state) {
  return {
    playerData: state.PlayersReducer.playerData,
    error: state.PlayersReducer.error,
    fetching: state.PlayersReducer.fetching
  }
}

export default connect(mapStateToProps, actions)(Baller)
