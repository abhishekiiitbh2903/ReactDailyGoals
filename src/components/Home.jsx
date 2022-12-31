import React,{useState,useEffect} from 'react'
import "./Home.css";
import Task from './Task';
const updated = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
const Home = () => {
const [tasks,setTasks]=useState(updated);
const [title,setTitle]=useState("");
const [description,setDescription]=useState("");
const submit =(e)=>{
e.preventDefault();
setTasks([...tasks,{
title,
description
}
])
setTitle("");
setDescription("");
};
const deleteTask=(index)=>{
  const newArr=tasks.filter((val,i)=>{
    return i!==index;
  });
  setTasks(newArr);
}
useEffect(() => {
  localStorage.setItem("tasks",JSON.stringify(tasks));
}, [tasks])

  return (
  <div className='container'>
  <h1>Daily Goals</h1>
      <form onSubmit={submit} >
        <input type="text" 
        placeholder='Title'
         value={title} 
         onChange={(e)=>setTitle(e.target.value)}/>
        <textarea 
        placeholder='Description'
        value={description} 
        onChange={(e)=>setDescription(e.target.value)}>
        </textarea>
        <button type="submit">Add</button>
      </form>
  {tasks.map((item , index)=>{
    return (<Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />)
  })}
    </div>
  );
}

export default Home