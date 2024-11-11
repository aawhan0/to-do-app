import React from 'react'

const page = () => {
  return (
    <>
    <h1 className='bg-black text-white p-5 text-2xl font-bold text-center'>
      My to-do list
    </h1>
    
    <form>
       <input
         type = "text"
        className='text-2xl
       border-zinc-800 border-4 m-8 px-4 py-2'
       placeholder='Enter task here'
       />

<input
         type = "text"
        className='text-2xl
       border-zinc-800 border-4 m-8 px-4 py-2'
       placeholder='Enter description here'
       />
      
      <button className='bg-black text-white text-2xl px-4 py-3 font-bold rounded-lg'> Add task</button>

    </form>
    </>
  )
}

export default page
