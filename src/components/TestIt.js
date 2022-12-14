import { useReducer, useState } from "react";

const TestReducer = () => {
    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)
    const total =count1 + count2

const handleClick1 = () => {
setCount1(count1  + 1)
}
const handleClick2 = () => {
    setCount2(count2 + 1)
}
    const [state,dispatch] = useReducer(
        (state,action) => ({
...state,
...action,
        }),{
        first:'',
        last:'',
    }
    )
    return ( 
<div>
<input 
type='text'
value={state.first}
onChange={(e) =>dispatch({first:e.target.value})}
/>
<input
type='text'
value={state.last}
onChange={(e) =>dispatch({last:e.target.value})}
/>
<p>{state.first}
</p>
<p>{state.last}</p>
<p>{total}</p>
<div>{count1}</div>
<button onClick={handleClick1}>+</button>
<div>{count2}</div>
<button onClick={handleClick2}>+</button>nnn
</div>




     );
}
 
export default TestReducer;