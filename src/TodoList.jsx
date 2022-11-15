import React from "react";
import {HiXCircle} from "react-icons/hi";


const TodoList =(props) =>{
  return(
    <>
    <div className="todo_style">
    <li>{props.text}</li>
    <HiXCircle className="cross_icon"
      onClick= {()=>{
          props.onSelect(props.id);
      }}
      />
  </div>
  </>
  );
};

export default TodoList;