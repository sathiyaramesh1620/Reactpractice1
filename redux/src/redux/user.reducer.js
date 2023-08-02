
import { USER_REQ,USER_SUCCESS,USER_FAIL } from "./user.action"
let intialState={
    users:[],
    errorMessage:"",
    loading:false
}
let userReducer=(state=intialState,action)=>{
    let {type,payload}= action
    switch(type){
        case USER_REQ:
            return{...state,loading:true}
        case USER_SUCCESS:
            return{...state,users:payload}
        case USER_FAIL:
            return{...state,errorMessage:payload,loading:false}  
            default:
             return state         
    }
}
export{userReducer}