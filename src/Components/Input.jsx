import React from 'react'
import PropTypes from 'prop-types'

function Input({state, handleChange}) {
    return (
      <div className="input-wrapper">
        <input className="hex-input" placeholder="Введи HEX-цвет..." value={state} onChange={handleChange}/>
      </div>
    )
}

Input.propTypes = {
  state: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Input

