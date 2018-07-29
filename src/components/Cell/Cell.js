import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line
import Classes from './Cell.css'

const cell = (props) => {
  return (
      <button onClick= {props.click} className="Cell">{props.player}</button>
  )
}

cell.prototype = {
  player: PropTypes.string.isRequired
}

export default cell