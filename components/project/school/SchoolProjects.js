import React from 'react'
import SemesterProject from './SemesterProject'

import Xpress from "../../../public/images/project/xpress.png"
import MusicPlayer from "../../../public/images/project/music_player.png"
import NQueen from "../../../public/images/project/nqueen.png"
import Scrapper from "../../../public/images/project/scrapper.png"
import SETAHubImg from "../../../public/images/project/setahub.png"
import CDGImg from "../../../public/images/project/cdg.png"

export default function SchoolProject() {
  return (
    <div className='mt-5 pt-5'>
        <div className='text-center my-3 pb-3'>
            {/* <span className='text-2'>Semester Projects</span> */}
        </div>
        <div className='row gy-5'>
            <SemesterProject coverImg={CDGImg} 
              title="First Winner of CDG x 42 Bangkok Hackathon competition Season 2 ( 2024 )"
              sourceCode="https://www.linkedin.com/posts/sai-marn-pha-071115237_cdg-42bangkok-heightmeasuringsystem-activity-7198163286805135361-tD59?utm_source=share&utm_medium=member_desktophttps://www.linkedin.com/posts/sai-marn-pha-071115237_cdg-42bangkok-heightmeasuringsystem-activity-7198163286805135361-tD59"
            />
            <SemesterProject coverImg={SETAHubImg} 
              title="SETAHub: A mentorship platform that connects junior students with senior students at KMILT.
              Built with React.js & FastAPI."
              sourceCode="https://github.com/SaiPha454/SETAHub"
            />
            <SemesterProject coverImg={Xpress} 
              title="XpressJS: A Node.js Framework Inspired by ExpressJS"
              sourceCode="https://github.com/SaiPha454/xpressjs"
              />
            <SemesterProject coverImg={MusicPlayer} 
              title="MelodiMix: A Music Player Developed with C++ and the Qt Framework"
              sourceCode="https://github.com/SaiPha454/melodimix/tree/main/MelodiMix"
              />
            <SemesterProject coverImg={NQueen} 
              title="NQueen: A Multi-Level Puzzle Game Built with Python and Tkinter"
              sourceCode="https://github.com/SaiPha454/Python_NQueen"
              />
            <SemesterProject coverImg={Scrapper} 
              title="Web Scraper: A Rust-based Project for Analyzing BBC Homepage Content and Reporting Statistics"
              sourceCode="https://github.com/SaiPha454/Rust_BBC_HomePage_Analysis"
            />
        </div>
    </div>
  )
}

