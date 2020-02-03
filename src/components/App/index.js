import React, {Component} from 'react'
import NavBar from '../NavBar'
import Desk from '../Desk'
//import DeskMenu from '../DeskMenu'

export default class App extends Component {

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Desk>

                </Desk>

            </div>
        )
    }
}