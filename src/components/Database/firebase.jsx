// Import the functions you need from the SDKs you need
import firebase from "firebase";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbnKuPfA0E8P-PNdBNQacuZCV_6peq5EM",
  authDomain: "project-aea84.firebaseapp.com",
  projectId: "project-aea84",
  storageBucket: "project-aea84.appspot.com",
  messagingSenderId: "809489492821",
  appId: "1:809489492821:web:79e1eb3f008bc4ab361ddc"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth,db };

// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
//   }