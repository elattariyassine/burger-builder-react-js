import Aux from '../../../hoc/Auxiliary';
import React from 'react';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;