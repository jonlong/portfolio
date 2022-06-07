import { css } from '@emotion/core'
import { em } from 'polished'
import { galleryBaseHeight, galleryScale, colors } from './settings'

/*! Devices.css v0.1.16 | MIT License | github.com/picturepan2/devices.css */
const devices = css`
  .device,
  .device::before,
  .device::after,
  .device *,
  .device *::before,
  .device *::after {
    box-sizing: border-box;
    display: block;
  }

  .device {
    position: relative;
    transform: scale(1);
    z-index: 1;

    img {
      border: 1px solid ${colors.gray[0]};
      height: 100%;
    }
  }

  .device .device-frame {
    z-index: 1;
  }

  .device .device-content {
    background-color: #fff;
    background-position: center center;
    background-size: cover;
    object-fit: cover;
    position: relative;
  }

  .device-iphone-8 {
    font-size: ${galleryScale[0]};
    height: ${galleryBaseHeight};
    width: ${em('419px')};
  }

  .device-iphone-8 .device-frame {
    background: #fff;
    border-radius: ${em('68px')};
    box-shadow: inset 0 0 0 ${em('2px')} #c8cacb,
      inset 0 0 0 ${em('7px')} #e2e3e4;
    height: ${em('871px')};
    padding: ${em('102px')} ${em('22px')};
    width: ${em('419px')};
  }

  .device-iphone-8 .device-content {
    border: ${em('2px')} solid #222;
    border-radius: ${em('4px')};
    height: ${em('667px')};
    width: ${em('375px')};
  }

  .device-iphone-8 .device-stripe::after,
  .device-iphone-8 .device-stripe::before {
    border: solid rgba(51, 51, 51, 0.15);
    border-width: 0 ${em('7px')};
    content: '';
    height: ${em('6px')};
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 9;
  }

  .device-iphone-8 .device-stripe::after {
    top: ${em('68px')};
  }

  .device-iphone-8 .device-stripe::before {
    bottom: ${em('68px')};
  }

  .device-iphone-8 .device-header {
    border: ${em('2px')} solid #c8cacb;
    border-radius: 50%;
    bottom: ${em('5px')};
    height: ${em('58px')};
    left: 50%;
    margin-left: ${em('-29px')};
    position: absolute;
    width: ${em('58px')};
  }

  .device-iphone-8 .device-sensors {
    background: #666;
    border-radius: ${em('3px')};
    height: ${em('6px')};
    left: 50%;
    margin-left: ${em('-38px')};
    position: absolute;
    top: ${em('52px')};
    width: ${em('76px')};
  }

  .device-iphone-8 .device-sensors::after,
  .device-iphone-8 .device-sensors::before {
    background: #666;
    border-radius: 50%;
    content: '';
    position: absolute;
  }

  .device-iphone-8 .device-sensors::after {
    height: ${em('10px')};
    left: 50%;
    margin-left: ${em('-5px')};
    top: ${em('-25px')};
    width: ${em('10px')};
  }

  .device-iphone-8 .device-sensors::before {
    height: ${em('12px')};
    left: ${em('-42px')};
    margin-top: ${em('-6px')};
    top: 50%;
    width: ${em('12px')};
  }

  .device-iphone-8 .device-btns {
    background: #c8cacb;
    height: ${em('30px')};
    left: ${em('-3px')};
    position: absolute;
    top: ${em('102px')};
    width: ${em('3px')};
  }

  .device-iphone-8 .device-btns::after,
  .device-iphone-8 .device-btns::before {
    background: #c8cacb;
    content: '';
    height: ${em('56px')};
    left: 0;
    position: absolute;
    width: ${em('3px')};
  }

  .device-iphone-8 .device-btns::after {
    top: ${em('62px')};
  }

  .device-iphone-8 .device-btns::before {
    top: ${em('132px')};
  }

  .device-iphone-8 .device-power {
    background: #c8cacb;
    height: ${em('80px')};
    position: absolute;
    right: ${em('-2px')};
    top: ${em('160px')};
    width: ${em('3px')};
  }

  .device-iphone-8.device-gold .device-frame {
    box-shadow: inset 0 0 0 ${em('2px')} #e4b08a,
      inset 0 0 0 ${em('7px')} #f7e8dd;
  }

  .device-iphone-8.device-gold .device-header {
    border-color: #e4b08a;
  }

  .device-iphone-8.device-gold .device-btns,
  .device-iphone-8.device-gold .device-btns::after,
  .device-iphone-8.device-gold .device-btns::before {
    background: #e4b08a;
  }

  .device-iphone-8.device-gold .device-power {
    background: #e4b08a;
  }

  .device-iphone-8.device-spacegray .device-frame {
    background: #222;
    box-shadow: inset 0 0 0 ${em('2px')} #74747a,
      inset 0 0 0 ${em('7px')} #9b9ba0;
  }

  .device-iphone-8.device-spacegray .device-stripe::after,
  .device-iphone-8.device-spacegray .device-stripe::before {
    border-color: rgba(204, 204, 204, 0.35);
  }

  .device-iphone-8.device-spacegray .device-btns,
  .device-iphone-8.device-spacegray .device-btns::after,
  .device-iphone-8.device-spacegray .device-btns::before {
    background: #74747a;
  }
`

export default devices
