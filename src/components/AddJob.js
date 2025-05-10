import React, {useContext} from 'react'
import {AContext} from '../contexts/acontext'


export default function AddJob (){

  return(
    <div>
      AddJob
      <button>update</button>
      <span style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '100%' 
        }}>
        <span>leftContent</span>
        <span>rightContent</span>
      </span>
    </div>
  )
}  

const styles ={
  addjob:{
    div0:{
      backgroundColor: '#c6a7a7'
    }
  }
}