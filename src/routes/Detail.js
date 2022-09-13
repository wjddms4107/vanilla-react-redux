import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const id = useParams().id;
  const toDos = useSelector((state) => state);
  const toDoText = toDos.find((todo) => todo.id === parseInt(id));


  console.log(toDos);
  console.log(toDoText);
  return (
    <>
    <h1>{toDoText?.text}</h1>
    Created at: {toDoText?.id}
    </>
  
  )
}

export default Detail;