import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// require('dotenv').config();

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_APIKEY,
//     authDomain: process.env.REACT_APP_AUTHDOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASEURL,
//     projectId: process.env.REACT_APP_PROJECTID,
//     storageBucket: process.env.REACT_APP_STORAGEBICKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//     appId: process.env.REACT_APP_APPID,
//     measurementId: process.env.REACT_APP_MEASUREMENTID
// };

const firebaseConfig = {
    apiKey: "AIzaSyDS2_dlr3yeMOYlvstxLelsm9jtUcKf1H8",
    authDomain: "henryfrontimages.firebaseapp.com",
    databaseURL: "https://henryfrontimages-default-rtdb.firebaseio.com",
    projectId: "henryfrontimages",
    storageBucket: "henryfrontimages.appspot.com",
    messagingSenderId: "362746830168",
    appId: "1:362746830168:web:55c8df417af4b97ad8992d",
    measurementId: "${config.measurementId}"
  };


export const app = initializeApp(firebaseConfig);
export const storage = getStorage();