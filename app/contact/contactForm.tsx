import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg=[#140c1c]  rounded-lg p-4 sm:p-10'>
      <h1 className='text-bg text-center text-2xl md:text-3xl lg:text-[2.5rem] font-bold '>Lets Work together!</h1>
      <form className='mt-8 mx-auto    block w-full overflow-hidden' >
        <div className='flex  flex-col md:flex-row items-center justify-between gap-4'>
          <input type="text" placeholder='First Name' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full ' />
          <input type="text" placeholder='Last Name' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full ' />
        </div>
        <div className='flex mt-5 flex-col md:flex-row items-center justify-between gap-4'>
          <input type="email" placeholder='Email address' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full ' />
          <input type="text" placeholder='Phone Number' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full ' />
        </div>
        <textarea className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[5px] border-gray-200 border-opacity-15 outline-none' rows={7} placeholder='Message' name="" id=""></textarea>
        <button className='bg-blue-800 rounded-lg mt-5 text-white py-3 px-5 contact '>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm