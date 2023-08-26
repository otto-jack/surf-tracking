import React, { Component } from 'react';

export default class WillyCall extends Component {

    /*state = {
        tamaramaData:{}
    };*/

    constructor(props) {
        super(props);
        this.state = { data:null};
    }

    

    componentDidMount() {
        /*fetch('http://localhost:5000/get_data')
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
            })
            .catch(error => console.error('Error fetching data:', error));
            */
        
    }

    render() {
        const { data } = this.state;


        return(
            <div className="WillyCall">
                
                {data ? (
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                ) : (
                    <p>Loading data...</p>
                )}
                <p> {this.props.exampleProp} </p>
            </div>

        )
    }
}