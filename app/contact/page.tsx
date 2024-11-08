import React from 'react'
import ContactForm from './contactForm'

const Contact = () => {
  return (
    <div id='contact' className='pt-[8rem] w-full flex-col flex justify-center items-center 
        pb-16  bg'>
          <div className='flex justify-center'>
        <h1 className='text-white text-6xl sm:text-6xl text-center mb-10'>Contact</h1>
        </div>
        <div className='flex  bg rounded-xl items-center  sm:w-[50%] w-[80%]   justify-center'>
            <div className='flex justify-center items-center'>
                <ContactForm/>
            </div>
           
            
        </div>
      
    </div>
  )
}

export default Contact