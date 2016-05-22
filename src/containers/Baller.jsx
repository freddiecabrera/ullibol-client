import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
const { func, object } = React.PropTypes
import Chart from '../components/Chart'

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
    const playerData = this.props.playerData || []
    console.log('Player Data: ', playerData)
    return (
      <div><Chart playerData={playerData} /></div>
    )
  }
})

function mapStateToProps (state) {
  return {
    playerData: state.PlayersReducer.playerData,
    error: state.PlayersReducer.error
  }
}

export default connect(mapStateToProps, actions)(Baller)
