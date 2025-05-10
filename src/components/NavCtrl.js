import React,{useContext} from 'react';
import {AContext} from '../contexts/acontext'
import ResponsivePages from  './ResponsivePages.js'

export const NavCtrl=(props)=>{
  const{title, appid, dev1}=props
  const{devInfo, path, handlePath} = useContext(AContext)
  const{panes}=devInfo

  const renderNav = ()=>{
    return(
    <nav style ={styles.nav.nav}>
      <span style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.2em',
        fontWeight: 'bold',
        padding: '10px',
        backgroundColor: 'whitesmoke',
        borderRadius: '5px',
        marginBottom: '10px'
      }}> {appid} {dev1}</span>
      <ul style ={styles.nav.ul}>
        {/* <li style ={styles.nav.li}>
          <a onClick={handlePath('/jobs')}>jobs</a>
        </li>
        <li style ={styles.nav.li}>
          <a onClick={handlePath('/addjob')}>addjob</a>
        </li> */}
        <li style ={styles.nav.li}>
          <a onClick={handlePath('/help')}>help</a>
        </li>
        <li style ={styles.nav.li}>
          <a onClick={handlePath('/control')}>control</a>
        </li>
      </ul>
    </nav>
    )
  }

  return(
  <div> 
    {renderNav()}
    <ResponsivePages/>
  </div>    
  )
}


const styles ={
  nav: {
    ul:{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'left',
      listStyleType: 'none',
      paddingLeft: '12px'
    },
    li:{
      display: 'inline',
      padding: '2px',
      paddingRight: '4px',
      background: 'whitesmoke'
    },
  },
}