const initialState = {
    products: [],
    cart: []
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'LOAD_PRODUCTS':
        return {...state, products: action.payload}
      case 'ADD_CART':
        let existed_item = state.cart.find(item => action.payload.id === item.id)
        if (existed_item) {
          existed_item.quantity += 1
          existed_item.total_price = existed_item.quantity * existed_item.price
          console.log("hey")
        } else {
        return {...state, cart: [...state.cart, action.payload]}
      }
      case 'REMOVE_CART':
        return {...state, cart: state.cart.filter(item => item.id !== Number(action.payload))}
      default:
        return state
    }
  }