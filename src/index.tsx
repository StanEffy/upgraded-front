import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './assets/fonts/AvenirRegular.otf'
import './assets/fonts/TiemposBold.otf'
import './assets/fonts/TiemposRegular.otf'
import App from './App'

import Amplify from 'aws-amplify'
import config from './aws-exports'

Amplify.configure(config)

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)
