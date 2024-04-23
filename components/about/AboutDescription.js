import React from 'react'

export default function AboutDescription() {
  return (
    <>
        <span className='text-2 text-light'>Who am I?</span>
        <p className='para-text-light mt-3'>
        With over 2 years of coding experience in Javascript, I specialize in crafting dynamic solutions 
        using the latest technologies. I am driven by the desire to solve
        real-life problems through innovative software solutions.
        As a strong team player, I thrive in collaborative environments, 
        contributing my skills and expertise. Off the screen, you will find me on the badminton court, 
        embracing the competitive spirit. 🏸✌️
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
