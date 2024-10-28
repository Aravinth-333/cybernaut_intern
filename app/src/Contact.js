import React from 'react'

function Contact() {
  return (
    <>
    
    <div className='flex h-screen  items-center mx-5'>
    <div className='bg-slate-400 m-5   '>
    <strong>Contact Us!</strong>
    <p className='font-serif '>We'd love to hear from you! Whether you have a question, feedback, <br />or just want to say hello, feel free to reach out.</p>
    </div>
    <div className='bg-violet-500 flex flex-col justify-center items-center w-96 h-96 text-stone-200 font-medium'>
    <h1>
    <strong>Meet us</strong>
    </h1>
    <h2>Aravinth.S</h2>
    <h2>+91 6xx98 xxxx</h2>
    <h1>
    <a className='hover:underline' href='mailto:aravinthsubbaiah3@gmail.com '>Email me!</a>
    </h1>
    </div>
    </div>
   
    </>
  )
}

export default Contact