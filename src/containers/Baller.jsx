import React from 'react'
import ReactHighcharts from 'react-highcharts'
import Loader from '../components/Loader'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { myEach, myMap } from '../HelperFunctions'
const { func, object, bool, string } = React.PropTypes

const Baller = React.createClass({
  propTypes: {
    getPlayerData: func,
    params: object,
    playerData: object,
    fetching: bool,
    getDataType: func,
    dataType: string
  },
  componentWillMount () {
    // const player = encodeURI(this.props.params.player)
    this.props.getPlayerData('andres guardado')
    this.props.getDataType('performanceScoreByMatch')
  },
  render () {
    if (typeof document !== 'undefined') {
      document.body.style.backgroundColor = '#0e0e13'
    }
    let config = {
      chart: {
        backgroundColor: '#0e0e13',
        type: 'areaspline'
      },
      title: {
        text: 'Performance Score By Match'
      },
      xAxis: {},
      plotOptions: {
             areaspline: {
                 fillOpacity: 0.1
             }
         }
    }
    const playerData = this.props.playerData
    const fetching = this.props.fetching
    let dataType
    if (playerData) {
      dataType = playerData[this.props.dataType]
      config.xAxis.categories = dataType.attacking.map(item => item.date)
      config.series = myMap(dataType, (value, key) => {
        let score = myMap(value, item => JSON.parse(item.score))
        return { name: key, data: score, color: 'green' }
      })
    }
    // console.log('playerData', playerData)
    // console.log('dataType:', dataType)
    // console.log('config', config);
    console.log('config', config)
    return (
      <div>
        {fetching ? <Loader /> : <ReactHighcharts config={config} />}
      </div>
    )
  }
})

function mapStateToProps (state) {
  return {
    playerData: state.PlayersReducer.playerData,
    error: state.PlayersReducer.error,
    fetching: state.PlayersReducer.fetching,
    dataType: state.PlayersReducer.dataType
  }
}

export default connect(mapStateToProps, actions)(Baller)
