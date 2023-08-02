
import Axios from 'axios'
const USER_REQ='USER_REQ'
const USER_SUCCESS = 'USER_SUCCESS'
const USER_FAIL ='USER_FAIL'

let fetchUserRequest=()=>{
    return { type:USER_REQ}
}
let fetchUserSuccess=(users)=>{
    return { type:USER_SUCCESS,payload:users}
}
let fetchUserFailure=(err)=>{
    return {type:USER_FAIL,payload:err}
}


let fetchUserAction=()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest())
        Axios.get(`https://jsonplaceholder.typicode.com/users`).then((response)=>{
            dispatch(fetchUserSuccess(response.data))
        }).catch((error)=>{
            dispatch(fetchUserFailure(error))
        })
    }
}
export{fetchUserAction,USER_REQ,USER_SUCCESS,USER_FAIL}