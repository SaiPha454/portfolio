import React from 'react'
import Activity from './Activity'
import MTURUN from '../../public/images/activity/mtu_run.jpg'
import HighSchoolAward from '../../public/images/activity/high_school_award.jpg';
import CleanCampus from '../../public/images/activity/clean_campus.jpg'; 
import MTURUNPrize from '../../public/images/activity/mtu_run_prize.jpg';
import MOngoDBCertificate from '../../public/images/activity/mongodb.jpg';
import RedisCertificate from '../../public/images/activity/redis.jpg';


export default function Activities() {
  
  return (
    <div className='activity-section mt-5 pt-5'>
        <div className='container'>
            <div className='text-center'>
                <span className='text-3'> Semester Projects</span>
            </div>
            <div className='row mt-5 g-3'>
                {
                  activities.map(({image, label}, index)=> <Activity image= {image} label={label} key={index + label} /> )
                }
            </div>
        </div>
    </div>
  )
}

export const activities = [
  {
    label : "MTU-RUN 2018 third winner team",
    image : MTURUN
  },
  {
    label : "MTU-RUN 2018 third winner team",
    image : MTURUNPrize
  },
  {
    label : "University campus clean activity",
    image : CleanCampus
  },
  {
    label : "Nothern Shan State Top 5th student award 2017",
    image : HighSchoolAward
  },
  {
    label : <>MongoDB Certificates<a className='ms-1' target="_blank" rel="noreferrer"
      href='https://www.linkedin.com/in/sai-marn-pha-071115237'>Verify Certs</a></>,
    image : MOngoDBCertificate
  },
  {
    label : <>Redis Certificates<a className='ms-1' target="_blank" rel="noreferrer"
      href='https://www.linkedin.com/in/sai-marn-pha-071115237'>Verify Certs</a></>,
    image : RedisCertificate
  }

];


