import React from 'react';


export default function Button(props){
  return(
    <button id={props.id} onClick={()=> {props.clickButton(); console.log("Hi Button pause/resume was clicked")}}>{props.text}</button>

  )

}