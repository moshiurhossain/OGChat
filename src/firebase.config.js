// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAhgjJ5eWWBVbPYw5bMAmoKb3LA1G5sy8",
  authDomain: "ogchat-b5ddc.firebaseapp.com",
  projectId: "ogchat-b5ddc",
  storageBucket: "ogchat-b5ddc.firebasestorage.app",
  messagingSenderId: "910892523169",
  appId: "1:910892523169:web:1685c88b3ac468f135dae0",
  measurementId: "G-B9F7RZCHVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app