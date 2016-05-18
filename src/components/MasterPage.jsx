import React from 'react'
const { element } = React.PropTypes

const MasterPage = React.createClass({
  propTypes: {
    children: element
  },
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

export default MasterPage
