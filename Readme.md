# Firebase Real Time Database

### NPM Packages to install
- installing firebase
- install parcel 

### Firebase Config From Console
- js/libs/firebaseConfig.js
```javascript
import {getDatabase} from 'firebase/database';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
export {db}
```

### Starting Parcel Bundler
used to compile your project

Start the parcel dev server
```npm
   npx parcel src/index.html
```


### Terminal
Kill process parcel dev server
```
    Ctrl+c
```

- Setup Firebase Web App VJS(vanilla javascript)
- config client for firebase
- import and connect to services inside config db, auth, etc.
- write to RTD
- read from the RTD

- delete
- update set