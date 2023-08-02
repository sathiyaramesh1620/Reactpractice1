import {INCR, DECR } from "./product.action"
let initialState={
    name: "phone",
    image: "https://m.media-amazon.com/images/I/711wsjBtWeL._SX679_.jpg",
    price: "10000",
    qty: "1",
    total: ""
}


let productReducer=(state=initialState,action)=>{
    console.log(action.type)
    switch(action.type){
        case INCR:
            return{...state,qty:state.qty+1}
        case DECR:
            return{...state,qty:state.qty-1}
                default:
                    return state
    }
}
export{productReducer}