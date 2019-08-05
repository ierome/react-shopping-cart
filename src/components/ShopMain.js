import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { loadProducts, addCart } from '../actions/shop_actions'
import '../styles/ShopMain.css'
import { Button } from 'semantic-ui-react'
import Cart from './Cart'


export default props => {
const [isOpen, setIsOpen] = useState(false)
const products = useSelector(appState => appState.products)


useEffect(() => {
loadProducts()
}, [])

function addToCart(e) {
    addCart(e.target.value)
    setIsOpen(true)
}
function formatPrice(str) {
    if (str.toString().length === 1) {
        return "0" + str.toFixed(2)
    } else {
        return str.toFixed(2)
    }
}

    return (<div>
        <div id="mainWrapper">
        <div id="products">
{products.map((item, i) => {
    return (
        <div id="product-item" key={i}>
            <img src={`/assets/${item.sku}_1.jpg`} alt=""></img>
            <div className={item.isFreeShipping ? "shipping" : "shipping hide"}>Free Shipping</div>
            <p>{item.title}</p>
            <p className="dollar"><span className="cents">$</span>{formatPrice(item.price).slice(0,2)}.<span className="cents">{formatPrice(item.price).slice(3)}</span></p>
            <Button id="addToCart" value={item.id} onClick={addToCart}>Add to Cart</Button>
        </div>
    )
})}
</div>
<Cart open={isOpen}></Cart>
</div>
    </div>)
}