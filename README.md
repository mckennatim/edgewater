## LOG

---
25/05/07
TODO
* get dev1 into the picture
---
25/01/26

Edgewater is flaky. Working in /home/tim/www/react/v18o/iot/edgewater

PROBLEMS
* Icons don't work, status is deprecated, can't know if you are online

* settings don'twork

Tried finding the last production version of `heat`. It was react 16 in /home/tim/www/react/hooks3/hooks2/iot/heat. 

FIX
To run the dev server in old /home/tim/www/react/hooks3/hooks2/iot/heat you need to run `set NODE_OPTIONS=--openssl-legacy-provider` before `npm run dev`

REMINDERS 

const [zones, setZones] = `useState({})`; Creates a state variable called zones initialized with an empty object {} and Creates a function setZones to update this state