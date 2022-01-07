import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAlIFSST92ThH4WPhGPXGgiH7ZxDYH4neg",
    authDomain: "fir-test-bdd83.firebaseapp.com",
    databaseURL: "https://fir-test-bdd83-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-test-bdd83",
    storageBucket: "fir-test-bdd83.appspot.com",
    messagingSenderId: "243204541744",
    appId: "1:243204541744:web:e949e372843a5986fd4cf5",
    measurementId: "G-WL25L55PLD"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app