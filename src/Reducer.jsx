import React, { useReducer } from "react";

const Reducer = () => {


const initialValue =0; 


function reducer(state,action)
{
    console.log("state and action",state,action);

    switch (action.type)
    {
        case 'increment':
            return (state = state+1);    
        
        case 'decrement' :
            return (state = state-1);
        case 'reset' :
            return 0;
        default :
               return state
             
    }
           
}

const [state,dispatch] = useReducer(reducer,initialValue);

    return (

        <div>
            <p>Count : {state}</p>
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>

        </div>

    )

}


export default Reducer;
