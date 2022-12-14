import { useState,useEffect } from "react";
import supabase from "../configuration/supabaseClient"
import { Link } from "react-router-dom";

// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {
    const [payment,setPayment] = useState(null)
    const[fetchError,setFetchError] =useState(null)
    // const history = useHistory()
    const heading = ['First Name','Last Name','Hours Worked','Over Time','bonus','Pay','total pay']


    useEffect(() => {
        const fetchPayment = async () => {
          const { data, error } = await supabase
            .from('PayRoles')
            .select()
            
          
          if (error) {
            setFetchError('Could not fetch')
            console.log('it is an error')
            
          }
          if (data) {
            setPayment(data)
            setFetchError(null)
            console.log(payment)
            // history.push('/')
          }
        }
    
        fetchPayment()
    
      }, [])
    
    return (
        <div>
        <table className="customers">
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Hours Worked</th>
            <th>Over Time</th>
            <th>Bonus</th>
            <th>Pay</th>
            <th>Total Pay</th>
            </tr>
            <td>
            {payment?.map((pay)=> (
               <tr>{pay.firstname}</tr>
               
              
            )
            
            )
            }
            </td>
            <td>
            {payment?.map((pay)=> (
               <tr>{pay.lastname}</tr>
               
              
            )
            
            )
            }
            </td>
           



            <td>
            {payment?.map((pay)=> (
               <tr>{pay.hoursWorked}</tr>
               
              
            )
            
            )
            }
            </td>
            <td>
            {payment?.map((pay)=> (
               <tr>{pay.overTimeHours}</tr>
               
              
            )
            
            )
            }
            </td>
            <td>
            {payment?.map((pay)=> (
               <tr>{pay.bonus}</tr>
               
              
            )
            
            )
            }
            </td>
            <td>
            {payment?.map((pay)=> (
               <tbody>{pay.pay}</tbody>
               
              
            )
            
            )
            }
            </td>
            <td>
            {payment?.map((pay)=> (
               <tr>{pay.total}</tr>
               
              
            )
            
            )
            }
            </td>
             </table>
        
<Link to='spreadsheet' className="create">create data</Link>


             </div>

/* <div>


<table style={{width:500}}>

 
    <thead>
        <tr>
            {heading?.map((head)=> (
               <th key={head.toString()}>{head}</th> 
            ))}
        </tr>
    </thead>
               
    <tbody>
                    {payment?.map(row => <TableRow row={row} />)}
                </tbody>
 
</table>
 */

// </div>

//       );
// }
// const TableRow = ({row}) =>{
    
//     return (
//         <>
// <tr>
//                 <td>{row.firstname}</td>
//             </tr>
//             <tr>
//             <td>{row.lastname}</td>
//         </tr>
//         </>
//     )
    
    )}

 
export default Home;