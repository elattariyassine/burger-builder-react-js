import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Erwin Smith',
                address:{
                    street: 'street 1',
                    zipCode: '00000',
                    country: 'Morocco'
                },
                email: 'test@test.com'
            }
        };
        axios.post('/orders.json', order)
                .then(response => {
                    this.setState({loading: false});
                    this.props.history.push('/');
                })
                .catch(error => this.setState({loading: false}));
    }

    render(){
        let form = (
            <form>
                <input type="text" className={classes.Input} name="name" placeholder="Your name"/>
                <input type="text" className={classes.Input} name="email" placeholder="Your email"/>
                <input type="text" className={classes.Input} name="street" placeholder="Street"/>
                <input type="text" className={classes.Input} name="postal" placeholder="Your postal"/>
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;