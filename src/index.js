import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css' 

function Base() {
    return (
        <App></App>
    )
}

render(<Base/>, document.getElementById("root"));