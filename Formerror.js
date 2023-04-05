import React,{useState} from 'react'

// export default function FormError() {
//   return (
//     <>
//     <form action='https://placement.skcet.ac.in/'>
//     Enter the name=<input type='text'></input>
//     <button type='submit'>submit</button>
//     </form>
//     </>
//   )
//   }



export default function FormValidation()
 {

  const[fisrtName,setFirstName]=useState("")
  const[lastName,setLastName]=useState("")
  const[error,setError]=useState(false)

const handleError=(e)=>{
  e.preventDefault();
  if(fisrtName.length == 0 || lastName.length==0)
  {
    setError(true)
  }
  if(fisrtName && lastName)
  {
    console.log("Fisrt Name =>"+fisrtName)
    console.log("Last Name =>"+lastName)
  }
}

  return (
   <>
   <form action='https://www.sciencedirect.com/'>
   Enter the First Name:<input type='text'onChange={(e)=>setFirstName(e.target.value)}/><br></br>
   <br></br>
   {error && fisrtName.length==0 ? <p>hey enter the first name</p>: ""}
   Enter the Last Name:<input type='text'onChange={(e)=>setLastName(e.target.value)}/><br></br>
   <br></br>
   {error && lastName.length ==0 ? <p>hey enter the last name</p>: ""}

   <button type='submit'>submit</button>
   </form>
   </>
  )
}

  

  
