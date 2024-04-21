import React,{useEffect} from 'react'
import ProgressBar from './ProgressBar'

export default function ExtraSkill() {

    useEffect(()=>{
        let progressBars = document.querySelectorAll('.extra-skill-progress-bar-value');
        let observerCallback=(progressBar)=>{
            
            progressBar.forEach((bar)=>{
            let width = bar.target.getAttribute('data-percentage');
                if(bar.isIntersecting){
                bar.target.style.width= `${width}%`;
                progressBarsObserver.unobserve(bar.target);
                }
            
            })
        }
        let progressBarsObserver = new IntersectionObserver(observerCallback, {threshold:0.8})
        progressBars.forEach((element)=>{
            progressBarsObserver.observe(element)
        })
    },[])

    return (
        <div className='extra-skill mt-5 pt-5'>
            <div className='row'>
                {
                    extraSkills.map((eachSkillType, index) => {
                        if(eachSkillType.type && eachSkillType.skills) {
                            return (
                                <div className='col-12 col-sm-12 col-md-6' key={eachSkillType.label + index}>
                                    <div className={`${eachSkillType.className }`}>
                                        <span className='text-3'> <i className= {`${ eachSkillType.icon }`} ></i> {eachSkillType.label}</span>
                                        <div className='pt-3'>
                                            {
                                                eachSkillType.skills.map(({percentage, label}, index) => {
                                                    return <ProgressBar percentage={percentage} label={`${label}`} key={ label + index} />
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

const extraSkills = [
    {   type: "font-end", className: "extra-skill-front-end pb3", icon: "bi bi-code-slash", label: "Front-end", 
        skills: [
            { label: "HTML", percentage: 40 },
            { label: "CSS", percentage: 60 },
            { label: "SASS", percentage: 60 },
            { label: "Nextjs", percentage: 60 },
        ]
    },
    {   type: "back-end", className: "extra-skill-back-end", icon: "bi bi-hdd-rack", label: "Back-end",
        skills: [
            { label: "ExpressJs", percentage: 80 },
            { label: "MongoDB", percentage: 70 },
            { label: "SQL Databases", percentage: 60 },
            { label: "Docker", percentage: 60 },
        ]
    },
]

