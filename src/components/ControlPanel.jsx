import React from 'react'

const ControlPanel = props => (
  <div className='col s5' style={{marginLeft: '1%'}}>
    <div className='waves-effect waves-light col s4' style={{backgroundColor: '#FECD06', height: '130px', width: '9em', marginTop: '1em', margin: '2px'}}>
      <p style={{fontSize: '8px', textAlign: 'center', marginTop: '18%'}}>PERFORMANCE SCORE</p>
      <p style={{fontSize: '2em', textAlign: 'center', marginTop: '0%'}}>{props.playerData.performanceScore}</p>
    </div>
    <div className='waves-effect waves-light col s4' style={{backgroundColor: '#FECD06', height: '130px', width: '9em', marginTop: '1em', margin: '2px'}}>
      <p style={{fontSize: '8px', textAlign: 'center', marginTop: '18%'}}>TOTAL APPEARANCES</p>
      <p style={{fontSize: '2em', textAlign: 'center', marginTop: '0%'}}>{props.playerData.totalAppearances}</p>
    </div>
    <div className='waves-effect waves-light col s4' style={{backgroundColor: '#FECD06', height: '130px', width: '9em', marginTop: '1em', margin: '2px'}}>
      <p style={{fontSize: '8px', textAlign: 'center', marginTop: '18%'}}>TOTAL GOALS SCORED</p>
      <p style={{fontSize: '2em', textAlign: 'center', marginTop: '0%'}}>{props.playerData.totalGoalsScored}</p>
    </div>
    <div className='waves-effect waves-light col s4' style={{backgroundColor: '#FECD06', height: '130px', width: '9em', marginTop: '1em', margin: '2px'}}>
      <p style={{fontSize: '8px', textAlign: 'center', marginTop: '18%'}}>SHOT ACCURACY</p>
      <p style={{fontSize: '2em', textAlign: 'center', marginTop: '0%'}}>{props.playerData.shotAccuracy}</p>
    </div>
    <div className='waves-effect waves-light col s4' style={{backgroundColor: '#FECD06', height: '130px', width: '9em', marginTop: '1em', margin: '2px'}}>
      <p style={{fontSize: '8px', textAlign: 'center', marginTop: '18%'}}>AVG. PASS ACCURACY</p>
      <p style={{fontSize: '2em', textAlign: 'center', marginTop: '0%'}}>{props.playerData.avgPassAccuracy}</p>
    </div>
    <div className='waves-effect waves-light col s4' style={{backgroundColor: '#FECD06', height: '130px', width: '9em', marginTop: '1em', margin: '2px'}}>
      <p style={{fontSize: '8px', textAlign: 'center', marginTop: '18%'}}>AVG. PASS LENGTH</p>
      <p style={{fontSize: '2em', textAlign: 'center', marginTop: '0%'}}>{props.playerData.avgPassLength}</p>
    </div>
    <div className='waves-effect waves-light col s4' style={{backgroundColor: '#FECD06', height: '130px', width: '9em', marginTop: '1em', margin: '2px'}}>
      <p style={{fontSize: '8px', textAlign: 'center', marginTop: '18%'}}>AVG. DUELS WON</p>
      <p style={{fontSize: '2em', textAlign: 'center', marginTop: '0%'}}>{props.playerData.duelsWon}</p>
    </div>
    <div className='waves-effect waves-light col s4' style={{backgroundColor: '#FECD06', height: '130px', width: '9em', marginTop: '1em', margin: '2px'}}>
      <p style={{fontSize: '8px', textAlign: 'center', marginTop: '18%'}}>TOTAL CHANCES CREATED</p>
      <p style={{fontSize: '2em', textAlign: 'center', marginTop: '0%'}}>{props.playerData.totalChancesCreated}</p>
    </div>
    <div className='waves-effect waves-light col s4' style={{backgroundColor: '#FECD06', height: '130px', width: '9em', marginTop: '1em', margin: '2px'}}>
      <p style={{fontSize: '8px', textAlign: 'center', marginTop: '18%'}}>DEFENSIVE ACTIONS</p>
      <p style={{fontSize: '2em', textAlign: 'center', marginTop: '0%'}}>{props.playerData.defensiveActions}</p>
    </div>
  </div>
)

ControlPanel.propTypes = {
  playerData: React.PropTypes.object.isRequired
}

export default ControlPanel
