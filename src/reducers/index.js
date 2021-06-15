
import goalPlan from "./goalPlan";
import loading from "./loading"
import alert from "./alert";

import {
    combineReducers
} from "redux";


const myReducer = combineReducers({
    goalPlan,
    loading,
    alert
})
export default myReducer;