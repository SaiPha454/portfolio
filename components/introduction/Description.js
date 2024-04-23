import React from 'react'

export default function Description() {
  return (
    <div className='col-sm-12 col-md-6 text-start order-md-first'>
        <span className='text-1 text-dark'>Hi, I&apos;m Sai.</span>
        <span className='desc-text-1 animated-text'>
            {/* With experiences in <span className='text-developer'>MERN Stack</span> */}
            Expertise in <span className='text-developer'>MERN Stack</span>
        </span>
        
        <p className='para-text-dark'>
          As a dedicated web developer, my mission is to deliver highly optimized and
          user-centric software solutions that exceed expectations.
        </p>
        <a className='btn btn-sm btn-primary text-white fs-5' type='button'
        href='https://drive.google.com/file/d/1vFitTWRlaN1SLeexa8lFzvkP6ctoyVff/view'
        target="_blank" rel="noreferrer"
        >
        Hire me
        </a>
    </div>
  )
}
