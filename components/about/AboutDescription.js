import React from 'react'

export default function AboutDescription() {
  return (
    <>
        <span className='text-2 text-light'>About Me?</span>
        <p className='para-text-light mt-3'>
        KMITL Software Engineering student proficient in Nodejs, TypeScript, and modern web frameworks.
        Armed with software development principles and problem-solving skills, driven to create meaningful
        innovations. Eager to learn new things, contribute to collaborative teams, and grow both
        personally and professionally.
        </p>
        <a href='https://drive.google.com/file/d/1vFitTWRlaN1SLeexa8lFzvkP6ctoyVff/view'
        target="_blank" rel="noreferrer"
        type='button' className='btn btn-outline-primary mt-3 cv-button'
        > 
        Download CV <i className="bi bi-download"></i>
        </a>
    </>
  )
}
