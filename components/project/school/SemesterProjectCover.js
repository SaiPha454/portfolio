import React from 'react'
import Image from 'next/image'

export default function SemesterProjectCover({src,title, sourceCode}) {
  return (
    <div className='yt-cover' >
      <div className='yt-cover-img' > 
          <Image src={src} alt={title} placeholder="blur"  />
      </div>

       <div className='project-overlay'>

        <a className='btn btn-sm btn-primary text-white fs-5' type='button'
          href={sourceCode}
          target="_blank" rel="noreferrer"
          >
          Learn More
          </a>
       </div>
    </div>
  )
}