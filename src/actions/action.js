export const filterCustomerPlan = (num) =>({
    //console.log("inside action")
    type:"availablePlans",
    num
})
export const choosingCustomerPlan = (payload) => ({
    type:"myplan",
    payload
})
export const paymentMode = (payload) => ({
    type:"transaction",
    payload
})