import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import ShopMain from './ShopMain'

export default props => {
  return (
    <Router>
    <Provider store={store}>
      <div>
        <Route path="/" component={ShopMain}></Route>
      </div>
    </Provider>
    </Router>
  )
}