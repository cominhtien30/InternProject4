const initialState = false;
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_LOADING":
           return true;
        case "HIDE_LOADING":
           return false;
        default:
            return state;
    }
    
}

export default myReducer;