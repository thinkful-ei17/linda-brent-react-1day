import React from 'react';

export default function Display(props){
  return(
    <div id='props.id'>
      <span>
        {props.text}
      </span>
    </div>
  )
}