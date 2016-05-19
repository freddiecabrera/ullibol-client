import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
const { func, object } = React.PropTypes

const Baller = React.createClass({
  propTypes: {
    getPlayerData: func,
    params: object
  },
  componentWillMount () {
    const player = encodeURI(this.props.params.player)
    this.props.getPlayerData(player)
  },
  render () {
    console.log(this.props.playerData)
    return (
      <div>Hello</div>
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
