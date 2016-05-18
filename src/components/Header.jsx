import React from 'react'
import Menu from './Menu'
import MenuButton from './MenuButton'

const Header = props => (
  props.toggle ? <Menu { ...props } /> : <MenuButton { ...props } />
)

Header.propTypes = {
  toggle: React.PropTypes.bool
}

export default Header
