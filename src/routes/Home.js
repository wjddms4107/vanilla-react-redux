import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";


function Home() {
  const [text, setText] = useState("");
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(add(text));
    setText("");
    
  }

  return (
  <>
  <h1>to Do</h1>
  <form onSubmit={onSubmit}>
    <input type="text" value={text} onChange={onChange}></input>
    <button>Add</button>
  </form>
  <ul>{toDos.map(toDo => (
    <ToDo {...toDo} />
  ))}</ul>
  </>
  )
}


export default Home;