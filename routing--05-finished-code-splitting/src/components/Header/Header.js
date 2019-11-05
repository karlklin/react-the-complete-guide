import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    componentDidMount() {
        console.log("[Header:componentDidMount]");
    }

    componentDidUpdate() {
        console.log("Header:componentDiDUpdate");
    }

    render () {
        return (
            <header>
                <nav>
                    <ul>
                        <li><NavLink
                            to="/posts/"
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>Posts</NavLink></li>
                        <li><NavLink to={{
                            pathname: '/new-post',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}>New Post</NavLink></li>
                    </ul>
                </nav>
            </header>
        ) ;
    }
}

export default Header;