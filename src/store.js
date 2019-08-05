import { createStore } from 'redux'

import shoppingReducer from './reducers/shopping.reducer'

const store = createStore(shoppingReducer)

export default store