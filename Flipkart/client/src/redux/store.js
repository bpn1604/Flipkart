import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers';
import cartReducers from './reducers/cartReducers';

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart:cartReducers,
});

const middleware = [thunk]

const store = createStore(
    reducer,composeWithDevTools(applyMiddleware(...middleware))
)

export default store