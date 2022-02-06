/* class 1
    Reading Data From RTD

    1. import {db}

    Firebase SDK
    1. get, ref methods
    2. ref(db, path)
    3. get(ref)
*/

/* class 2
    Read + Present Data
    1. Get Data RTD
    2. Build Component view/ui (component) 
    3. render the data +  component=========> UI
*/

import {ref, get} from 'firebase/database'
import {db} from './libs/firebaseConfig'
import {renderUser} from './templates/user'
// promise
let store=[]
async function pageInit(){
    const usersRef = ref(db, 'users/')
    const userSnapShot = await get(usersRef)
    // dataSnapShot has your data accessed by val()
     const userData =   {...userSnapShot.val()}
    //  Parsing data into a format I want...
     const users = Object.keys(userData).map(key=>{
          return userData[key]
      })

      console.log(users)
     /* 
             obj.prop
             obj['prop']
     */

}

pageInit()