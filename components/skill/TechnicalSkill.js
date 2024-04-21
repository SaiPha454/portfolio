import React, {useEffect} from 'react'
import ProgessCircleBar from './ProgessCircleBar';


export default function TechnicalSkill() {

  useEffect(()=>{
    let progressCircles = document.querySelectorAll('.progress-bar');
    let observerOptions={  threshold:0.7 };
    let observerCallback=(circles)=>{
      circles.forEach((circle)=>{
          let percentage = circle.target.getAttribute('data-percentage');
          circle.target.classList.toggle(`progress-bar-${percentage}`, circle.isIntersecting)
          if(circle.isIntersecting) observer.unobserve(circle.target)
      })
    }
    let observer = new IntersectionObserver(observerCallback, observerOptions)
    progressCircles.forEach((circle)=>{
      observer.observe(circle)
    })
},[])

  return (
    <>
      <div className='text-center'>
        <span className='text-2'>Technical Skills</span>
      </div>
      <div className='row mt-5 gy-5'>
        {
          skills.map(({label, percent}, index) => {
            return (
              <ProgessCircleBar label={label} percent ={percent} key={label + index} />
            )
          })
        }
      </div>
    </>  
  )
}

const skills = [
  { label: 'Javascript', percent: 80 },
  { label: 'Typescript', percent: 60 },
  { label: 'NodeJs', percent: 60 },
  { label: 'Reactjs', percent: 60 }
];