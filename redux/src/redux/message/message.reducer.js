import { GM, GN } from '../message/message.action'
let initialState = {
    message: "hello"
}
let messageReducer = (state = initialState, action) => {
    console.log(action)
    console.log(action.type)
    switch (action.type) {
        case GM:
            return { message: "gooooood   Morning" }
        case GN:
            return { message: "goood night" }
        default:
            return state

    }
}
export { messageReducer }