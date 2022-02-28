import { combineReducers } from "redux";
const initState = [];
export const CalReducer=(state=initState,action)=>{
    switch(action.type)
    {
    case("ADD"):
     {
         action.payload.id=Math.floor(Math.random() * 99);
         return [...state,action.payload]}
    
    case("DELETE"):
    {
        return state.filter(item=>item.id!==action.payload)
    }
     
    default:
        return state;
   }
   
};

export const rootreducer=combineReducers({
    Cal:CalReducer
});
