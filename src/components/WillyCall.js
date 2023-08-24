import React, { Component } from 'react';

export default class WillyCall extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    
    componentDidMount() {
        // send HTTP request
        // save it to the state
    }

    render() {
        return(
          <p>Click {this.props.exampleProp} on an emoji to view the emoji short name.</p>
        )
    }
}