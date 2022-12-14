import {useState} from 'react'
const Addit = () => {
    const names = ['Tobi','Phillip','Toyin']
    const [list,setList] =useState(['Tobi','Phillip','Toyin'])
    const [name,setName]= useState('')
    
const handleclick =() => {
    
    setList([...list,name])
}
    return ( 
        <div>
        {list.map ((lis)=> {
            return <p>{lis}</p>
            
        })}
        
        <input 
        type='text'
        value={name}
        onChange= {(e) => setName(e.target.value)}
      
        />
          <button onClick={handleclick}>add</button>
        </div>
     );
}
 
export default Addit;