import React, {Component} from 'react'

export default class NavBar extends Component {

    render() {
        return (
            <div className="navbar">
                <button className="navbar-toggler">Home</button>
                <button className="navbar-toggler">Доски</button>
                <button className="navbar-toggler">Добавить доску</button>
                <button className="navbar-toggler">Информация</button>
                <button className="navbar-toggler">Профиль</button>
            </div>
        )
    }
}