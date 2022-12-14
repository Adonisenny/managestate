import supabase from "../configuration/supabaseClient"
import { useHistory } from "react-router-dom"

import { useReducer, useState } from "react";

const SpreadSheet = () => {
      
    // const [state,dispatch] = useReducer(
    //     (state,action) => ({
    //         ...state,
    //         ...action
    //     }),{
    //         first:'',
    //         last:'',
    //         hoursWorked:'',
    //         overTimeHours:'',
    //         payPerHour:'',
    //         setFormError:'',
    const [formError,setFormError] =useState('')
    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [hoursWorked,setHoursWorked] = useState('')
    const history = useHistory()



    //     })
    const payPerHour = 10
        const overTimeHours = hoursWorked - 40
        const bonus =    overTimeHours * 0.5 * payPerHour
        const pay = payPerHour * hoursWorked
        const total = bonus + pay
        
           
            const handleSubmit = async (e) => {
                
                e.preventDefault();
               
            const {data,error} = await supabase
            .from('PayRoles')
            .upsert({firstname,lastname,hoursWorked,overTimeHours,bonus,pay,total})
            .select()
            if(error){
              console.log(error)
              setFormError('Fill it all')
            }
            if(data){
              console.log('updated')
              setFormError(null)
              history.push('/')
            
            }
              }
                        
        
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
            <h3>First name</h3>
<input
type='text'
value={firstname}
onChange={(e) =>setFirstName(e.target.value) }
/>
<br />
<br />
<h3>Last name</h3>
<input 
type='text'
value={lastname}
onChange={(e) =>setLastName(e.target.value) }
/>
<br /><br />
<h3>Hours worked</h3>
<input 
type='text'
value={hoursWorked}
onChange={(e) => setHoursWorked(e.target.value)}/>
<br /><br />

<h3>Pay PerHour</h3>
<input
type='text'
value={payPerHour}
onChange={(e) => (e.target.value)}

/>
<br />
<button className="">submit</button>
</form>





        </div>


     );
}
 
export default SpreadSheet;