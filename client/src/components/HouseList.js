import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/houseActions';
import PropTypes from 'prop-types';

class HouseList extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render(){
        // Curly braces makes the const items = this.props.items.item
        // Destructuring
        const { houses } = this.props.house;
        return (
            <div>
            <Container>
                <ListGroup>
                    <TransitionGroup className="house-list">
                        {houses.map(({ _id, street_address, city, state }) => (
                            <CSSTransition key={_id} timeout={500} >
                                <ListGroupItem>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button>
                                        {street_address},
                                        {city},
                                        {state}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
            </div>
        )
    }

}

HouseList.propTypes = {
    getItems: PropTypes.func.isRequired,
    house: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    house: state.house
});

export default connect(mapStateToProps, { getItems, deleteItem })(HouseList);