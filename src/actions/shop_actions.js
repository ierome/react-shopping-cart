import store from '../store'
import axios from 'axios';

export function loadProducts() {
    axios.get('http://localhost:3001/products').then(resp => {
        store.dispatch({
            type: 'LOAD_PRODUCTS',
            payload: resp.data
          })
    })
  }
export function addCart(id) {
    axios.get('http://localhost:3001/products/' + id).then(resp => {
      store.dispatch({
        type: 'ADD_CART',
        payload: {...resp.data, quantity: 1, total_price: resp.data.price}
      })
    })
}
export function removeFromCart(id) {
  store.dispatch({
    type: 'REMOVE_CART',
    payload: id
  })
}