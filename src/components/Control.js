import React, { useContext, useState, useEffect, useReducer } from "react";
import Countdown from 'react-countdown';
import Zones from './Zones';
import Icon from "@mui/material/Icon";
import { 
  SignalCellularAlt, 
  Block,
  Wifi
} from '@mui/icons-material';
import { cfg, ls, makeHref } from "../utilities/getCfg";
import {
  connect,
  Context,
  useDevSpecs,
  processMessage,
  setupSocket,
  monitorFocus,
  getDinfo,
} from "../../../@mckennatim/mqtt-hooks/src";
import { initialState, appid, ctrltypes, dev1 } from "../appInit";
// }from '@mckennatim/mqtt-hooks'

const lsh = ls.getItem();
console.log("in control ", lsh);

export default function Control() {
 
  const [connected, setConnected]= useState(false)
  const [onoff, setOnoff] = useState(0);
  const [tsec, setTsec] = useState(100);  
  const [srkey, setSrkey] = useState("zone0");
  const [status, setStatus] = useState("blur-disconnected");
  const [client, publish] = useContext(Context);
  client.onMessageArrived = onMessageArrived;

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    let nstate = { ...state };
    nstate[action.type] = action.payload;
    // console.log('state: ', state);
    // console.log('action: ', action);
    // console.log('nstate: ', nstate);
    return nstate;
  }

  function onMessageArrived(message) {

    const { nsarr, processed_message } = processMessage(message, devs, state);
    console.log('nsarr: ', nsarr);
    console.log('processed_message: ', processed_message);
    const {dev, payload}=processed_message

    console.log('dev: ', dev, 'dev1: ', dev1, 'connected: ', connected);
    if (nsarr.length > 0) {
      nsarr.map((ns) => {
        const key = Object.keys(ns)[0];
        const action = { type: key, payload: ns[key] };
        console.log('action: ', action.payload, 'key: ', key);
        dispatch(action);
        if (dev == dev1) {
          setConnected(true);
          const sr = payload.id;
          setOnoff(payload.darr[0]);
          setTsec(payload.darr[1]);
          console.log("sr: ", sr, "key: ", key);
          setSrkey(key);
        }
      });

    }

  }

  const doOtherShit = (devs, zones, client) => {
    publish(client, "presence", "hello form do other shit");
    console.log("devs: ",devs);
    const topic = `${Object.keys(devs)[0]}/req`
    const payload = `{"id":2, "req":"flags"}`
    console.log("topic, payload: ",topic,payload);
    // publish(client, topic, payload)
  };

  const topics = ["srstate", "sched", "flags", "timr"];

  // useDevSpecs gets dev and zone data stored in mysql when app is designed
  // in C:\fs\iot3\my\conf
  const { devs, zones, binfo, error } = useDevSpecs(
    ls,
    cfg,
    client,
    (devs, zones) => {
      if (!client.isConnected()) {
        connect(client, lsh, (client) => {
          if (client.isConnected()) {
            setupSocket(client, devs, publish, topics, (devs, client) =>
              doOtherShit(devs, zones, client)
            );
          }
        });
      } else {
        setupSocket(client, devs, publish, topics, (devs, client) =>
          doOtherShit(devs, zones, client)
        );
      }
    }
  );

  const goSignin = () => {
    const href = makeHref(window.location.hostname, "signin", "");
    console.log('href: ', href); //, `?${locid}`)
    window.location.assign(href);
  };

  const toggleOnOff = (typ) => () => {
    const newt = !state[typ].darr[0] * 1;
    console.log("newt: ", newt);
    console.log("typ: ", typ);
    
    const di = getDinfo(typ, devs);
    console.log("di: ", di);
    const topic = `${di.dev}/cmd`;
    const payload = `{"id":${di.sr},"sra":[${newt}]}`;
    console.log("topic,payload: ", topic, payload);
    publish(client, topic, payload);
  };

  const handleNewTstat = key=> event=>{
    if (event.key === 'Enter') {
      const val = event.target.value*1
      const di = getDinfo(key, devs);
      console.log('di: ', di);
      const dif = Math.round((state[key].darr[2]-state[key].darr[3])/2)
      console.log('dif: ', dif);
      const newt = [val+dif, val-dif]
      const topic = `${di.dev}/cmd`;
      const payload = `{"id":${di.sr},"sra":[${newt}]}`;
      console.log("topic,payload: ", topic, payload);
      publish(client, topic, payload);
    }
  }
  const handleTsec = key=> event=>{
    if (event.key === 'Enter') {
      const val = event.target.value*1
      const di = getDinfo(key, devs);
      console.log('di: ', di);
      const topic = `${di.dev}/cmd`;
      const payload = `{"id":${di.sr},"sra":[],"tsec":${val}}`;
      console.log("topic,payload: ", topic, payload);
      publish(client, topic, payload);
    }
  }

  const handleNewProg = key => event =>{
    if (event.key === 'Enter') {
      const tarr = event.target.value
      console.log('key, event.target: ', key, event.target.value);
      const di = getDinfo(key, devs);
      const topic = `${di.dev}/prg`;
      const payload = `{"id":${di.sr},"pro":[${tarr}]}`;
      console.log("topic,payload: ", topic, payload);
      publish(client, topic, payload);
    }
  }  

  const transferWidgetData = wdata =>{
    console.log('wdata: ', wdata);
    const {key, arr} = wdata;
    const tarr = {ctype:"relay", darr: arr}
    const action = { type: key, payload: tarr };
    // dispatch(action);
    const di = getDinfo(key, devs);
    console.log('di: ', di);
    const topic = `${di.dev}/cmd`;
    const payload = `{"id":${di.sr},"sra":[${arr}]}`;
    console.log("topic,payload: ", topic, payload);
    publish(client, topic, payload);
  }
  
  const handleDarrCng = key => event =>{
    // console.log('event.key, key: ', event.key, key);
    // alert(`event.key ${event.key}`)
    if (event.key === 'Enter' || event.key === 'Q'|| event.key=='q') {
      
      const arr = event.target.value.split(',').map(a=>a*1)
      setOnoff(arr[0] * 1)
      setTsec(arr[1] * 1)
      setSrkey(key)
      console.log('arr: ', arr, 'key: ', key);
      const tarr = {ctype:"relay", darr: arr, timeleft: 0}
      const action = { type: key, payload: tarr };
      dispatch(action);
      console.log('key, event.target: ', key, event.target.value);
      const di = getDinfo(key, devs);
      console.log('di: ', di);
      const topic = `${di.dev}/cmd`;
      const payload = `{"id":${di.sr},"sra":[${arr}]}`;
      console.log("topic,payload: ", topic, payload);
      publish(client, topic, payload);
    }
  }

  const handleDarrBtn = key => event =>{
    console.log('key,event: ', key,event);
    const di = getDinfo(key, devs);
    const topic = `${di.dev}/cmd`;
    const payload = `{"id":${di.sr},"sra":[${state[key].darr}]}`;
    console.log("topic,payload: ", topic, payload);
    //publish(client, topic, payload);
  }

  const handleRawCmd = event =>{
    if (event.key === 'Enter') {
      const payload = event.target.value
      console.log('event.target: ', event.target.value);
      const topic = `CYURD127/cmd`;
      // const payload = `{"id":${di.sr},"pro":[${tarr}]}`;
      console.log("topic,payload: ", topic, payload);
      publish(client, topic, payload);
    }  
  }

  const renderTimer = () => {   
    console.log('renderTimer: ', srkey, tsec, onoff);
    return (
    <div style ={{
      margin: '0px 100px 0px 100px',
      border: '1px solid #ddd',
      borderRadius: '30px',
      maxWidth: '220px',
      textAlign: 'center',
      backgroundColor: 'white',
      height: '50px',
      }}>
      <span style={{
        fontFamily: "Arial",
        fontSize: "1.2em",
        fontWeight: "bold", 
        padding: '5px 5px',
      }}>
        Timer</span><br/>
      {/* {onoff==1 && */}
      <span style={{
        fontFamily: "Arial",
        fontSize: "1.2em",
        fontWeight: "bold",
      }}> 
      <Countdown
        key={srkey}
        date={Date.now() + tsec * 1000}
        renderer={({hours, minutes, seconds, completed }) => {
          if (!onoff) {
            // Render a completed state
            console.log('completed: ', completed);
            return <span>off</span>;
          }else {
          return(
            <span>
              <span style={{paddingRight:'8px'}}>{srkey}</span>
              {hours > 0 && `${hours}:`}
              {minutes.toString().padStart(2, '0')}:
              {seconds.toString().padStart(2, '0')}
            </span>
          )
        }
        }
      }
      />
      </span>      

    </div>
    );
  };        

  const renderControl = () => {
    if (!error) {
      // console.log('state: ', state);
      const listData = Object.keys(state).map((key, i) => {
        if(devs){
          const di = getDinfo(key, devs);
          const ctype = state[key].ctype 
          // console.log('state[key]: ', state[key]);
          const darlen = state[key].darr?state[key].darr.length:0
          let darr = `[`
          if(ctype) {
            const clen= ctrltypes[ctype]["cmd"].length
            ctrltypes[ctype]["cmd"].map((c,j)=>{
              darr +=`${state[key].darr[c]}${j+1==clen?'':','} `
            })
          }  
          darr += `]`
          const crInput = ()=>{
            if(ctype && darlen>0){
            return(
            <span>
            <input size="2" type="text" onKeyDown={handleDarrCng(key)}></input>
            {/* <button onClick={handleDarrBtn(key)}>change</button> */}
            </span>)

          }
            // console.log(state[key].ctype);
          }
          return(
          <li key={i}>
            <span>  
              <span>{di.sr} {key} {darr}</span>
              {crInput()}


            </span>
          </li>)
        }
      });
      return (
        <div>
          <ul>{listData}</ul>
          [0,0,1],[21,55,0]
          [0,0,69,67],[13,13,72,70]
          <p>&#123;&quot;id&quot;:3, &quot;sra&quot;:[1, 240]&#125;</p>
          <br/>
          <input size="80" type="text" onKeyDown={handleRawCmd}></input>
          
          <p>
            Simple page to operate as an mqtt ws client that can send and
            recieve payloads to a test device
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p>{error.qmessage}</p>
        </div>
      );
    }
  };

  const rrender = () => {
    if (!error) {
      const { locdata } = binfo;
      const ico = status === "blur-disconnected" ? "block" : "signal_cellular_alt";
      return (
        <div>
          <header style={styles.header}>
            <div style={styles.container}>
              <div style={styles.ul}>
                <div style={{
                  fontFamily: "Arial",
                  fontSize: "1.2em",
                  fontWeight: "bold",
                }}>
                  {locdata && locdata.loc}{" "}
                </div>
              </div>
              {connected ? (
                <div style={{
                  paddingLeft: "10px",
                  }}>
                  <SignalCellularAlt fontSize="large"/>
                </div>
              ): (
                <div style={{
                  paddingLeft: "10px",
                  }}>
                  <Block fontSize="large"/>
                </div>
              )}
              <div style={styles.ll}>
                <div style={styles.txt}>
                  <span style={{
                    fontFamily: "arial",
                  }}>
                    outside: 
                  {state.temp_out.darr[0]} &deg;F
                  </span>

                </div>
              </div>
            </div>
          </header>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            From this app on this machine&#39;s perspective, {error.qmessage} It
            is probably best to
            <button onClick={goSignin}>go and (re-)signin</button>. But maybe
            nobody has registered you to a paticular location that has some iot
            devices that run this app. then this is as far as you can go. You
            can see some screenshots of the app below.
          </p>
          {/* <img src={control} alt="main page" />
          <img src={zone} alt="zone page" />
          <img src={daysched} alt="daysched page" />
          <img src={wksched} alt="wksched page" /> */}
        </div>
      );
    }
  };

  return (
    <div style={styles.ctrl.div0}>
      {rrender()}
      {renderTimer()}
      <Zones 
        keys={Object.keys(state).slice(0,4)}
        state={state}
        transferWidgetData={transferWidgetData}
      />
      <h4>Control</h4>
      {renderControl()}
    </div>
  );
}

const styles = {
  ctrl: {
    div0: {
      backgroundColor: "#e5bf37",
    },
  },
  ll: {
    padding: "5px 10px 3px 10px",
  },
  ul: {
    padding: "10px 10px 2px 10px",
  },
  };
