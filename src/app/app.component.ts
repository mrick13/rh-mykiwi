import { Component } from '@angular/core';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rh-mykiwi';
}
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs-MniUos6Olo9NluyScmyg2r9Qr711iE",
  authDomain: "mykiwi-a2ebe.firebaseapp.com",
  projectId: "mykiwi-a2ebe",
  storageBucket: "mykiwi-a2ebe.appspot.com",
  messagingSenderId: "165397693973",
  appId: "1:165397693973:web:4ec519cc117232285d301c",
  measurementId: "G-PM91ZKBGPW",
  databaseURL : "https://mykiwi-a2ebe-default-rtdb.europe-west1.firebasedatabase.app",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
