import React from 'react';


export default function Button(props){
  return(
    <button id='props.id' onClick={()=>console.log('hello')}>{props.text}</button>
  )

}