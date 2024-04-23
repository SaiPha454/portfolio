
import React,{useState} from 'react'
import SemesterProjectCover from './SemesterProjectCover';



export default function SemesterProject({title, coverImg, sourceCode}) {

  
  return (
    <div className='col-sm-12 col-md-6'  >

      <SemesterProjectCover title={title} src={coverImg} sourceCode={sourceCode} />
      <div className='text-center pt-3'>
        <span className='para-text-dark'>{title}</span>
      </div>
      
    </div>
  )
}

