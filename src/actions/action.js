export const filterPlan = (num) =>({
    //console.log("inside action")
    type:"availablePlans",
    num
})
export const decidingPlan = (payload) => ({
    type:"myplan",
    payload
})