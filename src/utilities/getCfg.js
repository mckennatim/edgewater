import env from '../../denv.json'
import {storageLocal} from './storageLocal'
import {appid,dev1} from "../appInit"

const getTLD = (host) =>{
  const sparr = host.split('.')
  if(sparr.length==3) return `${sparr[1]}.${sparr[2]}`//skip subdomain
  else if(sparr.length==4) return 'localhost' //192.168.1.35
  else return 'localhost'
}

const tld = getTLD(window.location.hostname)

const getURLS =(tld)=>{
  const urls = env[tld]
  const hostname= window.location.hostname
  if (hostname.split('.').length==4) {
    const keys= Object.keys(urls)
    keys.map((k)=>{
      const str =  urls[k]
      const nstr=str.replace('localhost', hostname)  
      urls[k] = nstr
    })
  }
  return urls
}
const urls = getURLS(tld)
console.log('urls: ', urls);

const authqry = urls.soauth+"/spa/"+env.appid+"?apiURL="+encodeURIComponent(urls.api)+"&cbPath="+encodeURIComponent(urls.cbPath)

const signupqry = urls.soauth+"/spa/signup?apiURL="+encodeURIComponent(urls.api)+"&cbPath="+encodeURIComponent(urls.cbPath)

const url = urls

// const cfg={authqry, appid:appid, signupqry, url, urls, cbPath:env.cbPath}
const cfg={authqry, 
  appid:appid, 
  mqtt_server:env.mqtt_server, 
  mqtt_port:env.mqtt_port,
  signupqry, 
  url, 
  urls, 
  cbPath:urls.cbPath
}

const ls = storageLocal(cfg.appid);

const makeHref = (host, app, rt) => {
  console.log("host: ", host);
  let href;
  if (
    host == "iot.sitebuilt.net" ||
    host == "iot.parleyvale.com" ||
    host == "hvac.parleyvale.com"||
    host == "apps.sitebuilt.net"
    
  ) {
    href = `../${app}/`;
  } else {
    href = `/hooks2/iot/${app}/dist/`;
  }
  if (rt) {
    href += rt;
  }
  return href;
};

export { ls, cfg, makeHref, dev1 };
