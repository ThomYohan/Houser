import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: []
        }
    }
    componentDidMount() {
        axios
            .get(`/houses/list`)
            .then(results => {
                this.setState({
                    houses: results.data
                })
            })
            .catch(err => {
                console.log('error in componentDidMount/Dashboard.js', err)
            })
    }

    deleteHouse = id => {
        axios
            .delete(`/houses/list/${id}`)
            .then(res => {
                this.setState({ house: res.data })
            })
            .catch(err => {
                console.log('error in deleteHouse/Dashboard.js', err)
            })
    }
 
    

    render(){
        let houseList = this.state.houses.map((house) => {
            return <House house={house} key={house.id}/>
        })
        return(
            <div>
                <div>Dashboard</div>
                <div>
                <House 
                    handleDeleteClick={this.deleteHouse}
                />
                <Link to='/wizard'>
                    <button>Add New Property</button>
                </Link>
                {houseList}
                </div>
            </div>
        )
    }
}

export default Dashboard