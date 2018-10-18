import {recharge_plans} from '../recharge_plans'
import { rechargeStore } from '../rechargeStore';

 const reducer1= (state = rechargeStore,action) =>{

    switch (action.type){
        case "availablePlans":
        {
        const choosen = recharge_plans.filter((numberToRecharge) =>{
        if(numberToRecharge.mobile_no===action.num)
        {
            
            return numberToRecharge.plans
        }
        
        });
       
        return {
            mobileNo:action.num,
            plans:choosen[0].plans,
            choosenPlan:state.choosenPlan}
        }
        case "myplan":
        {
            return{
            mobileNo:state.mobileNo,
            plans:state.plans,
            choosenPlan:action.payload
            }
        }
        default:
        return state;

    }
} 
export default reducer1;