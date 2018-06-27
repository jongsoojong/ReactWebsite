import React, { Component } from 'react';
import Header from '../Header/Header';
import './Background.css';

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }




    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div class='background'>
            <Header /> 
            </div>
        )
    }
}
export default Background;