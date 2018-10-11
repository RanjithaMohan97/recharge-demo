import {rechargeStore} from '../rechargeStore.js'
 const reducer2 = (state = rechargeStore.debit,action) =>{

    switch(action.type){
      
        case "transaction":
        {
            console.log(action.payload)
            return{
            //plans:state.plans,
            //choosenPlan:state.choosenPlan,
            debit:action.payload
            }
        }
        default:
        return state;
    }
}
export default reducer2;