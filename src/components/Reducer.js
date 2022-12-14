/* eslint-disable default-case */
import { useReducer } from "react";







 


const Allforms = () => {
    const [state,dispatch] =useReducer(
        (state,action) => ({
            
                ...state,
                ...action,
            

    }),{
    
first:'',
    last:'',
})
return(
    <div>
<input 
type='text'
value={state.first}

onChange={(e)=> dispatch({first:e.target.value})}
/>


<input
type='text'
value={state.last}
onChange={(e)=> dispatch({last:e.target.value})}

/>
<div>
    <p>{state.first}</p>
    <p>{state.last}</p>
</div>
    </div>

)

}




 
// const [state,dispatch] =useReducer((state,action)=> {
//     switch(action.type) {
//         case "SET_NAME":
//             return {...state,name:action.payload}
//     case 'ADD_NAME':
//         return{
//             state,
//             names: [...state.names, state.name],
//         name:'',
//     };

// }
// }, {

//     names: [],
//     name:'',

// })

// return (
//     <div>
//         <input
//         type='text'
//         value={state.name}
//         onChange = {e => dispatch ({type:"SET_NAME", payload:e.target.value})}

//         >
        
        
        
//         </input>
//         <div>
//             {state.names.map((name,index)=> (
//                 <div key={index}>{name}</div>
//             ))}
//         </div>
//         <button onClick={() => dispatch({type:'ADD_NAME'})}>add name</button>
//     </div>
// )


//     const numbers = [20,12,34]
//     let total = 0;
//     for (const n of numbers){
//         total +=n
//     }
//     console.log(total)
//    const tota =numbers.reduce((cv,n)=> cv * n,1);
//    console.log(tota)
//     return (

// <>
// </>

//       );
// }
 
export default Allforms;


