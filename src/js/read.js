/* 
    Reading Data From RTD

    1. import {db}

    Firebase SDK
    1. get, ref methods
    2. ref(db, path)
    3. get(ref)
*/

import {ref, get} from 'firebase/database'
import {db} from './libs/firebaseConfig'

let store;

async function pageInit(){
    //get docRef
    const userRef = ref(db, 'users/');
    const dataSnapShot = await get(userRef);
    // dataSnapShot exists()
    // val() that gives the data
    // dataSnapShot.val() {{},{},{}}
    // array of objects
    // conver the object to array
    //Object.keys(object)
    store = {...dataSnapShot.val()};
    const userKeys = Object.keys(store);
    userKeys.forEach ( key => {
        console.log(store[key]);
    })  
}

pageInit()