export const initialState = {
    user: null
}

const reducer = (state,action) => {
    switch(action.type){
        case "SET_USER": 
            return{
            ...state,
            user: action.type
        }
        default:
            return state;
    }
}
export default reducer;