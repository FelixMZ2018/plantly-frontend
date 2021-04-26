import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import "../../assets/stylesheets/application"

import App from "./index"

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.body.appendChild(document.createElement('div')),
  )
})
