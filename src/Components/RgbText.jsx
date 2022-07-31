import React from 'react'
import PropTypes from 'prop-types'

function RgbText({state, handleChange}) {
    return (
        <div className="rgb-wrapper">
          <div className="rgb-text" onChange={handleChange}>{state}</div>
        </div>
    )
}

RgbText.propTypes = {
  state: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default RgbText

