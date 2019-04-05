import React, { Component } from 'react'

class House extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.name,
            address: props.address,
            city: props.city,
            state: props.state,
            zipcode: props.zipcode
        }
    }

    handleDeleteClick = () => {
        this.props.deleteHouse(this.state.id)
        this.setState({
            edit: false
        })
    }


    render() {
        return(
            <div>
                <div>House</div>
                <input type="text" name="name" value={this.props.name} />
                <input type="text" name="address" value={this.props.address} />
                <input type="text" name="city" value={this.props.city} />
                <input type="text" name="state" value={this.props.state} />
                <input type="text" name="Zip Code" value={this.props.zipcode} />
                <button onClick={this.handleDeleteClick}>Delete House</button>
            </div>
        )
    }
}

export default House