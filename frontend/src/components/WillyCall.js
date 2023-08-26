import React, { Component } from 'react';
import axios from 'axios';
export default class WillyCall extends Component {

    state = {
        tamaramaData:{}
    };

    constructor(props) {
        super(props);
        this.state = { };
    }

    

    async componentDidMount() {
        const tamarama =  19161;
        const tamaramaURL = 'https://api.willyweather.com.au/v2/' + process.env.REACT_APP_WILLYWEATHER_KEY + '/locations/' + tamarama + '.json';

        fetch(tamaramaURL)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        /*axios.get(tamaramaURL,withCredentials=false)
            .then(response  => this.setState({tamaramaData: response.data})) 
            .catch(function (error) {
                console.log(error.toJSON());
        });*/

        /*const response = await axios({
            method: 'get',
            url: tamaramaURL,
            withCredentials: false
        });
        this.setState({tamaramaData: response.data.total});
        */
        /*.then(function (response) {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        })
        //.then(response  => this.setState({tamaramaData: response.data})) 
        .catch(function (error) {
            console.log(error.toJSON());
        });*/
        // send HTTP request
        // save it to the state
    }

    render() {
        return(
           
             <p>{this.tamaramaData} {this.props.exampleProp} </p>
        )
    }
}