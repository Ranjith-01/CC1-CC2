import React from 'react'

export default function Catch(props) {
    try{
        if(props.newName==="veraku")
        {
            throw new Error("can't da poda veraku")
        }   
    }
    catch(error){
        console.log(error)
        document.write("mudiyathu poda")

    }
  return (
    <div>{props.newName}</div>
  )
}
