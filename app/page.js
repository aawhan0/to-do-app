"use client";

import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask, {title,desc}]);
    // console.log(title);
    // console.log(desc);
    settitle('')
    setdesc('')
    console.log(mainTask);
    
   
  };


  let renderTask = <h2> No task available</h2>

  if(mainTask.length>0){
  renderTask= mainTask.map((t,i) => {
    return <div className='flex justify-between'>
        <h5 className="text-2xl font-semibold">{t.title}</h5>
        <h5 className='text-xl font-semibold'>{t.desc}</h5>
    </div>
})
}
  return (
    <>
    
    <h1 className='bg-slate-700 text-white p-5 text-4xl font-bold text-center'>
      My to-do list
    </h1>
    
    <form onSubmit={submitHandler}>
       <input
         type = "text"
        className='text-2xl text-black
       border-zinc-800 border-4 m-8 px-4 py-2'
       placeholder='Enter task here'
       value={title}
       onChange={(e)=>{
       settitle(e.target.value)
       }}
       />

<input
        type = "text"
        className='text-2xl text-black
       border-zinc-800 border-4 m-8 px-4 py-2'
       placeholder='Enter description here'
       value={desc}
       onChange={(e)=>{
       setdesc(e.target.value)
       }}
       />
      
      <button className='bg-white text-black text-2xl px-4 py-2 m-4 font-bold border-zinc-800 border-4 rounded-lg'> Add task</button>

    </form>
    <hr />
    <div className='p-8 bg-slate-200'>
      <ul className='text-black text-2xl  font-bold text-center'>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page
