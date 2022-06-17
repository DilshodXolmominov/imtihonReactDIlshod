import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                   <img src="{this.props.main.imgSrc}" alt="" />
                   <p>{this.props.main.text}</p>
            </div>
        );
    }
}

export default Main;
