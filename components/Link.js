import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, name, onClick }) => {
  if (active) {
    return <span style={{paddingRight: 15}}>{name}</span>
  }
  return (
    <span style={{paddingRight: 10}}>
    <a href="#"
       onClick={e => {
         onClick()
       }} 
    >
    {name}
    </a>
    </span>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link