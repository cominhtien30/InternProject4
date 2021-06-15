import * as types from "../constant"
export const pageSize = (quantity) =>
{
    return {
        type: types.ITEM_IN_PAGE,
        quantity
    }
}
export const currentPage = (index) =>
{
    return {
        type: types.CURRENT_PAGE,
        index
    }
}
//data
//request
export const getDatasRequest = () =>
{
    return {
        type: types.GET_DATA_REQUEST,
    }
}
//target
export const loadDataTarget = () =>
{
    return {
        type: types.LOAD_DATA_TARGET,
    }
}
//delete target
export const deleteTarget = (id) =>
{
    return {
        type: types.DELETE_ITEM_TARGET,
        id
    }
}
//add plan
export const addPlan = (newPlan) =>
{
    return {
        type: types.ADD_PLAN,
        newPlan,
    }
}
//upodate
export const updatePlan = (index,newPlan) =>
{
    return {
        type: types.UPDATE_PLAN,
        newPlan,
        index
    }
}