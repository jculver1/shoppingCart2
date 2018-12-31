import React from 'react'


const CartItemComponent = (props) => {
    return (
        <div className="list-group">
            <div className="list-group-item">
            <div className="row">
                <div className="col-md-8">{props.item.product.name}</div>
                <div className="col-md-2">{((props.item.product.priceInCents * props.item.quantity)/ 100).toFixed(2)}</div>
                <div className="col-md-2">{props.item.quantity}</div>
                </div>
            </div>
        </div>
    )
}

export default CartItemComponent