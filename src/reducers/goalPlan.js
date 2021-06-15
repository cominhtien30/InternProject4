import data from "../data"
const initialState = [];
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_DATA_TARGET":
                // localStorage.clear();
            if (localStorage && localStorage.getItem("plan")) {
                return JSON.parse(localStorage.getItem("plan"))
            } else {
                localStorage.setItem("plan", JSON.stringify(data()));
                return JSON.parse(localStorage.getItem("plan"))
            }
        case "DELETE_ITEM_TARGET":
            const deletedPlan = state.filter(item => item.GoalPlanID !== action.id);
            localStorage.setItem("plan", JSON.stringify(deletedPlan));
            return deletedPlan;
        case "ADD_PLAN":
            const addPlan=state.push(action.newPlan);
            localStorage.setItem("plan", JSON.stringify(state));
            return addPlan;
        case "UPDATE_PLAN":
             const updatePlan=state;
              updatePlan[action.index]=action.newPlan;
             localStorage.setItem("plan", JSON.stringify(updatePlan));
             return  updatePlan;
        default:
            return state;
    }
}

export default myReducer;