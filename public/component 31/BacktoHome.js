import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class BacktoHome extends Component {
    render() {
        return (
            <div>
                <Link to="/">Orqaga</Link>  
            </div>
        )
    }
}
