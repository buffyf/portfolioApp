import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class References extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Reference 1: Mom</h1>
                    <p>phone: 888-999-0000</p>
                    <a href="mailto:buffysmom@me.com">Email</a>
                    <p>Recommendations: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                </div>
                <div>
                    <h1>Reference 2: Dad</h1>
                    <p>phone: 888-999-1111</p>
                    <a href="mailto:buffysdad@me.com">Email</a>
                    <p>Recommendations: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                </div>
                <div>
                    <h1>Reference 3: Sister</h1>
                    <p>phone: 888-999-2222</p>
                    <a href="mailto:buffyssis@me.com">Email</a>
                    <p>Recommendations: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                </div>
            </div>
        )
    }
}
