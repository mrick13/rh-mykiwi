import { Injectable } from '@angular/core';
import { getAnalytics } from 'firebase/analytics';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firebaseConfig = {
    apiKey: 'AIzaSyDs-MniUos6Olo9NluyScmyg2r9Qr711iE',
    authDomain: 'mykiwi-a2ebe.firebaseapp.com',
    projectId: 'mykiwi-a2ebe',
    storageBucket: 'mykiwi-a2ebe.appspot.com',
    messagingSenderId: '165397693973',
    appId: '1:165397693973:web:4ec519cc117232285d301c',
    measurementId: 'G-PM91ZKBGPW',
    databaseURL:
      'https://mykiwi-a2ebe-default-rtdb.europe-west1.firebasedatabase.app',
  };
  // Initialize Firebase
  app: FirebaseApp | undefined;
  analytics: any;
  auth: any;
  constructor() {
    this.app = initializeApp(this.firebaseConfig);
    this.analytics = getAnalytics(this.app);
    this.auth = getAuth(this.app);
  }
}
