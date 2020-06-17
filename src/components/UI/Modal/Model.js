import React from 'react';
import classe from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component{

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate(){
        console.log('[Modal] willUpdate');
    }

    render(){
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classe.Modal} 
                    style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0'}}>
                        {this.props.children}
                </div>
            </Aux>
        );
    }
};

export default Modal;