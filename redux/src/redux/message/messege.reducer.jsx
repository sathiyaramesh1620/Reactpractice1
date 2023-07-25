import{GM,GN} from './messege.action'
let initialState={
    message:"goodmorning"
}
let messageReducer=(state =initialState,action)=>{
    console.log(action)
    console.log(action.type)
    switch(action.type){
        case GM:
            return{message:"Good morning"}
            case GN:
                return{message:"good night"}
                default:
                    return state

    }
}
export{messageReducer}