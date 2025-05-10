import React,{useContext} from 'react'
import {AContext} from '../contexts/acontext'

export default function Help(){
  const {visiblePages} = useContext(AContext)
  return(
    
    <div style ={styles.help.div0}>
      {visiblePages.map((p,i)=>(<div key={i}>{p}</div>))}
<h2>Edgewater Stewards</h2>

<h3>Intallation and Startup</h3>
The Edgewater Water Control (EWC) is powered from the USB on the electric panel. <bold>Before rebooting with the Side Button or reconnecting to USB, pull the fuses for the outdoor solenoids.</bold> Once the EWC has booted up and is running, you can put in the solenoid fuse. You can tell if the EWC is running by pressing the Top Button and seeing an LED go on in the controller. Press the Top Button again to shut it down then put in the solenoid fuse.

<h3>Edgwater Water Control basic operation</h3>

<h4>Top Button</h4>
Top button press begins a watering sequence starting with zone 1 and ending with zone 4. Each zone gets watered in turn for 60 minutes (default). Pressing the top button a second time, while zone 1 is operating, cancels the watering sequence.

<h4>Side Button</h4>
Pressing the Side button for 1 second reboots the Edgewater Water control. This can take up to 4 minutes.

<h3>Advanced operation for Stewards</h3>

<p>Edgewater Water Control (EWC) generally operates without WIFI/internet with default settings for successive watering of zone 1, 2, 3 & 4. The current default setting is 60 minutes (3600 sec) for each zone</p>

<p>On startup, EWC does search for a WIFI connection for about 4 minutes before it is ready to operate.</p>

<p>This app has two pages 'help' and 'contol'. Noah can give you access to the 'control' part of the app which allows you to send commands to the EWC device from the <a href="https://apps.sitebuilt.net/edgewater/#/control">https://apps.sitebuilt.net/edgewater/#/control</a> when the EWC is connected to the internet through a phone hotspot. At this point the app is not at all polished and is mainly used by the device developer for trouble shooting and re-programming.</p>

<h4>phone hot spot control</h4>
<p>Hot spot use allows for quick reset of EWC and for customizing the schedule for EWC</p>

<p>To usr this feature you need to activate the hot spot feature on your phone, then rename the hotspot SSID to "Edgewater" with a password "jjjjjjjj" (8 j's)</p>

<p>Turn on the hotspot and then reboot the EWC device by pressing the side button for 1 second. Press the side button again after 10 seconds Your phone should indicate that 1 device is connected. Now it is ready to operate. This is considerably faster than rebooting without a hotspot on.</p>

<p>The control page of the app, when the EWC is connected to a hotspot, allows for monitoring and control of the device.</p>

<h5>control and monitoring and testing</h5> 
<p>The edgewater app, will show a signal graphic once it hears from the watering controller. It may be a good idea to refresh the app. </p>

<p>To the right of each zone's name, is a number indicating the number of seconds that node is currently set for. To the right of that is in indicator of whether the pump is on or off for that zone.</p>

<p>To change the watering duration for a zone, move the 'slider' for that zone and press the 'send' button. 3600 seconds is one hour. To test all the zones for shorter that the full watering schedule, you can use the 'slider' and 'send' button and reduce the watering time for all the zones. Once you press 'send', the watering controller is updated to the new time value. The number to the right of the zone name should update and the value is stored in the watering device.</p>

<p>To start the watering process from the app, you can select the checkbox, set the slider and press 'send'. The OFF indicator should turn ON and a green color. You can start the watering process from any zone. From there it will go in order until zone4 is finished</p>

<p>You can also check that the top button in the shed starts the watering process. Before you do, make sure all the zone indicators show OFF. If not, reset them with unchecking the checkbox and hitting the 'send' button </p>

<h5>Returning to offline watering control</h5>
<p>Once the testing is complete, go through and set each zone for the time you want. Turn off your phone hotspot and reboot the EWC device by pressing the side button for 1 second. It will try to connect to the internet for as long as 4 minutes before it gives up and goes to offline operation.  To start the watering process press the Top button on the EWC device. </p>


 <p></p>

    </div>
  )
}

const styles ={
  help:{
    div0:{
      backgroundColor: '#c7b1c9'
    }
  }
}