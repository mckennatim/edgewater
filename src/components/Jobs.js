import React,{useContext, useState} from 'react'
import {AContext} from '../contexts/acontext'
import Countdown from 'react-countdown';


export default function Jobs (){


  return(
    <div style ={styles.jobs.div0} >
      <Countdown date={Date.now() + 100000} />
      {/* {MobileFirstControlGroups()} */}
      Jobsaa
      
      
    </div>
  )
}

const styles = {
  jobs:{
    div0:{
      backgroundColor: '#aa9898'
    }
  }
}