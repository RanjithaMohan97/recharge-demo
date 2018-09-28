import {recharge_plans} from '../recharge_plans'
//import {rechargeStore} from '../rechargeStore.js'
export const reducer1= (state,action) =>{
   // console.log(recharge_plans);
    console.log(state);
    //console.log(action.type);
    switch (action.type){
        case "availablePlans":
        {
        const choosen = recharge_plans.filter((numberToRecharge) =>{
        if(numberToRecharge.mobile_no===action.num)
        {
            return numberToRecharge.plans
        }
        
        });
        return {plans:choosen,
            choosenPlan:state.choosenPlan}
        }
        case "myplan":
        {
            return{
            plans:state.plans,
            choosenPlan:action.payload
            }
        }
        default:
        return state;

    }
} 