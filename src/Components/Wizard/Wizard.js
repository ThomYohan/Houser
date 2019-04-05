import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }
    handleNameChange(val) {
        this.setState({
            name: val
        })
    }

    handleAddressChange(val) {
        this.setState({
            address: val
        })
    }

    handleCityChange(val) {
        this.setState({
            city: val
        })
    }

    handleStateChange(val) {
        this.setState({
            state: val
        })
    }

    handleZipcodeChange(val) {
        this.setState({
            zipcode: val
        })
    }
    createHouse = house => {
        axios
            .post('/houses/list', house)
            .then(res => {
                this.setState({ house: res.data })
            })
            .catch(err => {
                console.log('error in createHouse/wizard.js', err)
            })
    }
    handleClick = () => {
        let house = this.state
        
        this.props.handleClick(house)
    }

    render() {
        return(
            <div>
                <div>Wizard</div>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                <div>
                    <h2>Name</h2>
                    <input 
                        value={this.state.name}
                        onChange={e => this.handleNameChange(e.target.value)}
                        />
                </div>
                <div>
                    <h2>Address</h2>
                    <input 
                        value={this.state.address}
                        onChange={e => this.handleAddressChange(e.target.value)}
                    />
                </div>
                <div>
                    <h2>City</h2>
                    <input 
                        value={this.state.city}
                        onChange={e => this.handleCityChange(e.target.value)}
                    />
                </div>
                <div>
                    <h2>State</h2>
                    <input 
                        value={this.state.state}
                        onChange={e => this.handleStateChange(e.target.value)}
                    />
                </div>
                <div>
                    <h2>Zip Code</h2>
                    <input 
                        value={this.state.zipcode}
                        onChange={e => this.handleZipcodeChange(e.target.value)}
                    />
                </div>
                <button onClick={this.handleClick}>Complete</button>
            </div>
        )
    }
}

export default Wizard