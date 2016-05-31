import React from 'react'

const BallerInfoHeader = props => (
  <div style={{color: 'white'}}>
    <ul className='collection' style={{border: 'none', minHeight: '27em', marginBottom: '-6%', marginTop: '-1%'}}>
      <li className='collection-item avatar' style={{backgroundColor: '#5E44FD', border: 'none', height: '20em'}}>
        <img src={props.playerData.picture} className='circle z-depth-5' style={{height: '20em', width: '20em', marginLeft: '60em', marginTop: '1em'}} />
        <div className='row col s12' style={{marginTop: '3em'}}>
          <span className='col s12' style={{fontSize: '2em'}}>{props.playerData.name} #{props.playerData.number}</span>
        </div>
        <div className='row col s12'>
          <div className='player-height col s2'>
            <p className='player-titles'>HEIGHT</p>
            <p>{props.playerData.height}</p>
          </div>
          <div className='DOB col s2'>
            <p className='player-titles'>DOB</p>
            <p>{props.playerData.dob}</p>
          </div>
          <div className='BMI col s2'>
            <p className='player-titles'>BMI</p>
            <p>{props.playerData.bmi}</p>
          </div>
          <div className='age col s2'>
            <p className='player-titles'>AGE</p>
            <p>{props.playerData.age}</p>
          </div>
        </div>
        <div className='row col s12'>
          <div className='current-value col s2'>
            <p className='player-titles'>CURRENT VALUE</p>
            <p>{props.playerData.currentValue}</p>
          </div>
          <div className='foot col s2'>
            <p className='player-titles'>FOOT</p>
            <p>{props.playerData.foot}</p>
          </div>
          <div className='position col s2'>
            <p className='player-titles'>POSITION</p>
            <p>{props.playerData.position}</p>
          </div>
          <div className='position col s2'>
            <p className='player-titles'>CURRENT CLUB</p>
            <p>{props.playerData.currentClub}</p>
          </div>
        </div>
        <div className='row'><a className='col s1' href={props.playerData.twitter} target='blank'><img src='http://imgh.us/symbol.svg' style={{height: '2em'}} /></a></div>
      </li>
    </ul>
  </div>
)

BallerInfoHeader.propTypes = {
  playerData: React.PropTypes.object.isRequired
}
export default BallerInfoHeader
