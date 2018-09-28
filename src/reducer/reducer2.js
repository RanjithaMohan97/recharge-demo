import {rechargeStore} from '../rechargeStore.js'
export const reducer2 = (state=rechargeStore,action) =>{
    switch(action.type){
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