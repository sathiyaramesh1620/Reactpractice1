
import {INCR,DECR} from './product.action'
let initialState = {
    name: "phone",
    image: "https://m.media-amazon.com/images/I/31GmCJTD0GL._SY445_SX342_QL70_FMwebp_.jpg",
    price: "10000",
    qty: 1,
Total:""
}


let productReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case INCR:
            return { ...state, qty: state.qty + 1 }
        case DECR:
            return { ...state, qty: state.qty - 1 }
        default:
            return state
    }
}
export {productReducer}