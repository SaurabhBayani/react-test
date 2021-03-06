import React, { Component } from 'react'

export default class Headline extends Component {
    render() {
        const { props: {
            header,
            desc
        } } = this;
        if (!header) {
            return null;
        }
        return (
            <div data-test="headlineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="desc">{desc}</p>
            </div>
        )
    }
}
