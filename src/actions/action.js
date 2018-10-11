export const filterPlan = (num) =>({
    //console.log("inside action")
    type:"availablePlans",
    num
})
export const decidingPlan = (payload) => ({
    type:"myplan",
    payload
})
export const paymentMode = (payload) => ({
    type:"transaction",
    payload
})