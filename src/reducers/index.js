import {combineReducers} from "redux";
import products from './product.reducer'
import auth from './auth.reducer'


export default combineReducers({
    products,
    auth
})