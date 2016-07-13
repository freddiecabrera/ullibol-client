import React from 'react'
import ReactHighcharts from 'react-highcharts'
import Loader from '../components/Loader'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { myEach, myMap } from '../HelperFunctions'
import BallerInfoHeader from '../components/BallerInfoHeader'
import ControlPanel from '../components/ControlPanel'


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
        backgroundColor: '#14141F',
        type: 'line'
      },
      title: {
        text: 'Performance Score'
      },
      xAxis: {
        categories: ['8.11.15', '8.16.15', '8.22.15', '8.30.15', '9.12.15', '10.4.15', '10.17.15', '10.24.15', '10.31.15', '11.8.15', '11.21.15', '11.29.15', '12.5.15', '12.12.15', '12.19.15', '1.17.16', '1.24.16', '1.27.16', '1.30.16', '2.27.16', '3.5.16', '3.12.16', '3.20.16', '5.1.16', '5.8.16']
      },
      yAxis: {
        gridLineWidth: 0,
        minorGridLineWidth: 0
      },
      labels: {
        enabled: false
      },
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
      config.series = myMap(dataType, (value, key) => {
        let score = value.map(item => JSON.parse(item.score))
        return { name: key, data: score, color: 'green' }
      })
      config.series[0].color = '#5E44FD'
      config.series[1].color = '#FECD06'
      config.series[2].color = '#00D8AD'
      config.series[3].color = '#F50057'
    }
    console.log(this.props.playerData)
    return (
      fetching ? <Loader /> : <div>
        {this.props.playerData ? <BallerInfoHeader playerData={this.props.playerData} /> : null}
        <div className='row'>
          <div className='col s12'>
            <div className='col s12'>
              {this.props.playerData ? <ControlPanel playerData={this.props.playerData} /> : null}
              <div className='col s7' style={{marginLeft: '-3%'}}>
                <div className='chip-container'>
                  <div style={{ marginRight: '1em', backgroundColor: 'rgba(0, 0, 0, 0)', border: '2px solid #00D8AD', color: '#333333'}} className='chip'>
                    By mathch
                  </div>
                  <div style={{ backgroundColor: 'rgba(0, 0, 0, 0)', border: '2px solid #00D8AD', color: '#333333'}} className='chip'>
                    Culmulative
                  </div>
                </div>
                <ReactHighcharts config={config} />
              </div>
            </div>
          </div>
        </div>
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
