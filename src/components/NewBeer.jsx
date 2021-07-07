import axios from 'axios';
import React, { Component } from 'react';
// import Navbar from './components/NavBar';
import { Redirect } from 'react-router-dom';

class NewBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: Number(''),
            contributed_by: '',
            beerAdded: false,
        }
    }

    handleChangeInput = (event) => {
        console.log('event', event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()

        const addNewBeer = {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.contributed_by,
        }

        console.log('new beer', addNewBeer)

        axios
        .post('https://ih-beers-api2.herokuapp.com/beers/new', addNewBeer)
        .then((response) => {
            console.log('response', response.data)
            this.setState({
                beerAdded: true,
            })
        })
    }

    render() {
        if(this.state.beerAdded === true) {
            return <Redirect to="/beers" />
        }

        return(
            <div>
                {/* <div>
                    <NavBar />
                </div> */}
                <h1>Add your beer</h1>
                <form onSubmit={this.handleSubmit}>
                <label className="font-semibold">Name:</label>
                <input 
                    className="border border-black-md rounded-md my-3"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChangeInput}
                    />
                <br></br>
                <label className="font-semibold">Tagline:</label>
                <input
                    className="border border-black-md rounded-md my-3"
                    type="text"
                    name="tagline"
                    value={this.state.tagline}
                    onChange={this.handleChangeInput}
                    />
                <br></br>
                <label className="font-semibold">Description:</label>
                <input
                    className="border border-black-md rounded-md my-3"
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChangeInput}
                    />
                <br></br>
                <label className="font-semibold">First Brewed:</label>
                <input 
                    className="border border-black-md rounded-md my-3"
                    type= "text"
                    name= "first_brewed"
                    value={this.state.first_brewed}
                    onChange={this.handleChangeInput}
                    />
                <br></br>
                <label className="font-semibold">Brewers Tips:</label>
                <input 
                    className="border border-black-md rounded-md my-3"
                    type="text"
                    name="brewers_tips"
                    value={this.state.brewers_tips}
                    onChange={this.handleChangeInput}
                    />
                <br></br>
                <label className="font-semibold">Attenuation:</label>
                <input 
                    className="border border-black-md rounded-md my-3"
                    type="number"
                    name="attenuation_level"
                    value={this.state.attenuation_level}
                    onChange={this.handleChangeInput}
                    />
                <br></br>
                <label className="font-semibold">Contributed by:</label>
                <input 
                    className="border border-black-md rounded-md my-3"
                    type="text"
                    name="contributed_by"
                    value={this.state.contributed_by}
                    onChange={this.handleChangeInput}
                    />
                <br></br>
                <button 
                    className="bg-green-200 border border-green rounded-md my-3 p-2"
                    type="submit"
                    >Submit</button>
                </form>
            </div>
        )
    }
}

export default NewBeer;