import React, {useState} from "react";

function DisplayTodoList({content, onChecked, id}){

  return <>
          <li onClick={()=>{
            onChecked(id);
          }}>{content}</li>
  </>
}

export default DisplayTodoList;