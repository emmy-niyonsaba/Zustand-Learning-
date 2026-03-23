


import React,{useEffect, useState} from 'react'
import DisplayUser from './DisplayUser'
function PersonalData() {
    const [person ,setPerson] = useState(null)
   
const getPersonData= async ()=>{
        try {
           const res =  await fetch("https://jsonplaceholder.typicode.com/users")
           if(!res.ok) throw new Error("Failed to fetch");
           const data = await res.json()
            setPerson(data)
        } catch (error) {
            console.error(error);
        }
} 
    useEffect(()=>{
      getPersonData()
    },[])
    
  return (
    <div>
      <DisplayUser user={person} setUser={setPerson} />
    </div>
  )
}

export default PersonalData
