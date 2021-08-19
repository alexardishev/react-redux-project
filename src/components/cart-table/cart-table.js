import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteFromCart, deleteOnePosition} from '../../actions'

const CartTable = ({items, deleteFromCart, deleteOnePosition}) => {
    


    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, qtty} = item;
                        return (
                            <div key={id} className="cart__item">
                            <img src={url} className="cart__item-img" alt="Cesar salad"></img>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-price">{price}$</div>
                            <div className="cart__item-price">{qtty}</div>
                            <div onClick={()=> deleteFromCart(id)} className="cart__close">&times;</div>
                            <button onClick={() => deleteOnePosition(id)}>---</button>
                        </div>
                        )
                    })
                    
                }


            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
};

const mapDispatchToProps = {
    deleteFromCart,
    deleteOnePosition

}


export default connect(mapStateToProps, mapDispatchToProps) (CartTable);