/* 
    Write Data to the RTD
    import {db} connection from the firebase config file
        path to the firebase real time database 
    firebase web api (need the firebase package installed)
    methods ref, push, set

    1. set up a reference to the document/service your going to use ref method
    2. push new data to RTD
*/

import {ref, push} from 'firebase/database';
import {db} from './libs/firebaseConfig';

// ref to the form adding a submit event
document.forms['writeToRTD'].addEventListener('submit', onWriteNewData);

// Form Submit Event Handler
function onWriteNewData(e){
    e.preventDefault();
    const newUser = e.target.elements['writeUserData'].value.trim();
    // create the document reference users/
    const docRef = ref(db, 'users/')
    const writeRef = push(docRef,{
                name:newUser
            })
}
