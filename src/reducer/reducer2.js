import {rechargeStore} from '../rechargeStore.js'
 const reducer2 = (state = rechargeStore.cardDetails,action) =>{

    switch(action.type){
      
        case "transaction":
        {
            console.log(action.payload)
            return{
            //plans:state.plans,
            //choosenPlan:state.choosenPlan,
            cardDetails:action.payload
            }
        }
        default:
        return state;
    }
}
export default reducer2;