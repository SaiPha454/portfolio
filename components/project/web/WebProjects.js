import React, {useState} from 'react'
import CarouselItem from './CarouselItem'

import MyPortfolioImg from '../../../public/images/project/portfolio.png';
import ApiImg from '../../../public/images/project/api.png';


export default function WebProjects() {
  const [carouselInterval, setCarouselInterval] = useState(2500)

  const techStackStyles = {fontSize:13, color: "gray"}
  return (
    <>
      <div className='text-center'>
        <span className='text-2'>My Projects</span>
      </div>
      <div id="webProjectCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active" data-bs-interval={carouselInterval}>
            <CarouselItem img={MyPortfolioImg} 
            demoLink="https://saimarnpha.vercel.app"
            sourceCode="https://github.com/SaiPha454/portfolio"
            text={<p>Portfolio Website <br/> <small style={techStackStyles}> Built with Nextjs & SASS </small></p> }
            />
          </div>
          <div className="carousel-item" data-bs-interval={carouselInterval}>
            <CarouselItem img={ApiImg} 
            demoLink="https://github.com/SaiPha454/POS"
            sourceCode="https://github.com/SaiPha454/POS"
            text={<p>POS REST API <br/> <small style={techStackStyles}>Built With Expressjs & MongoDB</small> </p>}
            />
          </div>
        </div>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#webProjectCarousel" 
          data-bs-slide-to="0" className="active carousel-indicator-index mx-2" 
          aria-current="true" aria-label="Slide 1"
          />
          <button type="button" data-bs-target="#webProjectCarousel" 
          data-bs-slide-to="1" className='carousel-indicator-index mx-2' 
          aria-label="Slide 2"
          />
        </div>
      </div>
    </>
  )
}
