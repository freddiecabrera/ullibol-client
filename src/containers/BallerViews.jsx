import React from 'react'
import Header from '../components/Header'
import { divider, MexNatFootTeam, gridView, listView } from '../../public/css/BallerViews'
import { connect } from 'react-redux'
import * as actions from '../actions'
const { func, bool, array } = React.PropTypes
import GridView from '../components/GridView'
import ListView from '../components/ListView'

const BallerViews = React.createClass({
  propTypes: {
    toggleGrid: func,
    toggleGridView: bool,
    getPlayers: func,
    allfootballersData: array
  },
  componentWillMount () {
    this.props.getPlayers()
  },
  render () {
    if (typeof document !== 'undefined') {
      document.body.style.backgroundColor = '#0e0e13'
    }
    const allfootballersData = this.props.allfootballersData || []
    console.log(allfootballersData)
    return (
      <div>
        <Header { ...this.props } />
        <div className='divider' style={divider}></div>
        <div className='container-fluid'>
          <div className='row' style={{ marginTop: '3%' }}>
            <div className='col s12' style={{ marginLeft: '10%' }}>
              <h5 className='col s7' style={MexNatFootTeam}>Mexican National Football Team</h5>
              <div className='col s3' style={{ marginTop: '1%' }}>
                <a onClick={this.props.toggleGrid.bind(null, false)} style={gridView}>
                  <i className='material-icons small waves-effect waves-light'>view_module</i>
                </a>
                <a onClick={this.props.toggleGrid.bind(null, true)} style={listView}>
                  <i className='material-icons small waves-effect waves-light'>view_headline</i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {this.props.toggleGridView ? <ListView allfootballersData={allfootballersData} /> : <GridView allfootballersData={allfootballersData} />}

      </div>
    )
  }
})

function mapStateToProps (state) {
  return {
    toggle: state.UserInteractionsReducer.toggle,
    toggleGridView: state.UserInteractionsReducer.toggleGridView,
    allfootballersData: state.PlayersReducer.allfootballersData,
    allfootballersDataError: state.PlayersReducer.error
  }
}

export default connect(mapStateToProps, actions)(BallerViews)
