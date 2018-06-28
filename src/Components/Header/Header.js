import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
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
            <div class="header-background">
                <div class="header-content">
                    <div class="logo">
                    Jongsoo
                    </div>
                    <ul class="header-links">
                        <li class="links-props">ABOUT ME</li>
                        <li class="links-props">PROJECTS </li>
                        <li class="links-props">CONTACT ME</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header;