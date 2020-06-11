import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';

class Checkout extends React.Component {
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for(let param of query.entries()){
            console.log(param);
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 1
        }
    }
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render(){
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} 
                checkoutCancelled={this.checkoutCancelledHandler} checkoutContinued={this.checkoutContinuedHandler}/>
                <Route 
                path={this.props.match.path + '/contact-data'} 
                component={ContactData}/>
            </div>
        );
    }
}

export default Checkout;