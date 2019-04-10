import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { addItem } from '../actions/houseActions';

class HouseModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newHouse = {
            street_address: this.state.street_address,
            city: this.state.city,
            state: this.state.state,
            zip_code: this.state.zip_code,
            mls_number: this.state.mls_number,
            asking_price: this.state.asking_price
        }

        // Add item via addItem action
        this.props.addItem(newHouse);

        // Close modal
        this.toggle();
    }


    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Item</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="street_address">Street Address</Label>
                                <Input 
                                    type="text"
                                    name="street_address"
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="city">City</Label>
                                <Input type="text" name="city" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="state">State</Label>
                                <Input type="text" name="state" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="zip_code">Zip Code</Label>
                                <Input type="number" name="zip_code" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="mls_number">MLS Number</Label>
                                <Input type="number" name="mls_number" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="asking_price">Asking Price</Label>
                                <Input type="number" placeholder="$" name="asking_price" onChange={this.onChange} />
                            </FormGroup>
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add House</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    house: state.house
});

export default connect(mapStateToProps, { addItem })(HouseModal);