import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';

class Checkout extends React.Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = null;
        for(let param of query.entries()){
            if(param[0] === 'price'){
                price = param[1];
            }
            else{
                ingredients[param[0]] = +param[1];
            }
        }
        console.log(price + 'er');
        this.setState({ingredients: ingredients, totalPrice: +price});
        console.log(this.state);
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
                render={(props) => (<ContactData {...props} ingredients={this.state.ingredients} price={this.state.totalPrice} />)}/>
            </div>
        );
    }
}

export default Checkout;