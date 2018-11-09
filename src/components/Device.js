import React from 'react'

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

export default Device
