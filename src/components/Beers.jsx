import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            status: 'loading'
        }
    }

    componentDidMount = () => {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
            console.log('API data', response.data);
            this.setState({
                data: response.data,
                status: 'loaded'
            })
        })
        .catch((error) => {
            console.log('error', error);
        })
    }

    render() {
        return (
            <div>
                {this.state.status === 'loading' && <p>loading...</p>}
                {this.state.status === 'loaded' && 
                this.state.data.map((item, index) => {
                    return (
                        <div className="py-6" key={item._id}>
                        <img className="h-44" src={item.image_url} alt="" />
                        <Link to="/beers/:beerId">
                            <h1 className="text-2xl font-black">{item.name}</h1>
                        </Link>
                        <p>{item.tagline}</p>
                        <p>Created by: {item.contributed_by}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Beers;