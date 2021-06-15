const initialState = false;
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALERT_SUCCESS":
           return true;
        case "HIDE_ALERT":
            return false;
      default:
            return state;
    }
    
}

export default myReducer;