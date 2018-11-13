import React from 'react'
import PropTypes from 'prop-types'

const Device = ({ children }) => (
  <div className="device device-iphone-8 device-gray">
    <div className="device-frame">{children}</div>
    <div className="device-stripe" />
    <div className="device-header" />
    <div className="device-sensors" />
    <div className="device-btns" />
    <div className="device-power" />
  </div>
)

Device.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Device
