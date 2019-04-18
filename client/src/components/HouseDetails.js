import React, { Component } from 'react';
import { getItem } from '../actions/houseActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

class Details extends Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getItem(id);
    }

    render() {

        return (
            <div>
                <h1>House ID: {this.props.match.params.id}</h1>
                <h2>Address: {this.props.house.houses[0].street_address}</h2>
                <h2>City: {this.props.house.houses[0].city}</h2>
                <h2>State: {this.props.house.houses[0].state}</h2>
                <h2>Zip Code: {this.props.house.houses[0].zip_code}</h2>
                <h2>MLS Number: {this.props.house.houses[0].mls_number}</h2>
                <h2>Asking Price: {this.props.house.houses[0].asking_price}</h2>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    house: state.house
});

export default connect(mapStateToProps, { getItem })(Details);