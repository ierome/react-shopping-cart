import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {Button} from 'semantic-ui-react'
import {removeFromCart} from '../actions/shop_actions'
import { slide as Menu } from 'react-burger-menu'

export default props => {
const cart = useSelector(appState => {
    return appState.cart
})

function removeItem(e) {
    removeFromCart(e.target.value)
}

    return (
<Menu isOpen={props.open} width={600} right customBurgerIcon={ <img src="/assets/cart.svg" alt="" /> }>
    <div className="items">
{cart.map((item,i) => {
    return (
        <div className="itemz" key={i}>
            <img src={`/assets/${item.sku}_2.jpg`} alt=""></img>
            <div>
                <p>{item.title}</p>
                <p>${item.total_price}</p>
                <p>{item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <Button value={item.id} onClick={removeItem} id="removeCart">X</Button>
            </div>
        </div>
    )
})}
</div>
<div id="total">
    <h1>Total ${cart.reduce((a,b) => {
        return a + b.total_price
    }, 0).toFixed(2)}</h1>
</div>
</Menu>
    )
}