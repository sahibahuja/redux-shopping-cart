import { ADD_TO_CART ,REMOVE_TO_CART} from "../constants";
const initialState={
    CartData:[]
}
export default function cartItems(state=[initialState],actions)
{
    switch(actions.type){
    case ADD_TO_CART:
        // console.warn("reducer",action)
        return[

            ...state
            ,{cartData:actions.data}
        
    ]
    case REMOVE_TO_CART:
        // console.warn("reducer",action)


            state.pop();
            return [

               ...state,]
                default:
                    return state}
            }
            
            
 