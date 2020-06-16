import Aux from '../../../hoc/Auxiliary';
import React from 'react';

const orderSummary = (props) => {
    const style = {
        textTransform: 'capitalize'
    };
    const ingredientSummary = Object.keys(props.ingredients)
            .map(igKey => {
                return <li key={igKey}><span style={style}>{igKey}</span>: {props.ingredients[igKey]}</li>
            });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default orderSummary;