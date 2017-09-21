import React, { Component } from 'react'


export default class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Contact Info:</h1>
                <p>Name: Buffy Feinstein</p>
                <a href="mailto:buffy@me.com">Email</a>
                <a href="https://www.facebook.com/buffyf" target="_blank">Facebook</a>
                <a href="https://www.github.com/buffyf" target="_blank">Github</a>
                <p>Phone: 888-999-0000</p>
            </div>
        )
    }
}
