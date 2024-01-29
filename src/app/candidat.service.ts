import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat/candidat';
import { getDatabase, ref, set } from "firebase/database";

@Injectable({
  providedIn: 'root',
})
export class CandidatService {
  constructor() {
    const firebaseConfig = {
      databaseURL:
        'https://mykiwi-a2ebe-default-rtdb.europe-west1.firebasedatabase.app/',
    };
  }

   addCandidat(candidat: Candidat) {
     const db = getDatabase();
     return set(ref(db, 'candidat/' + candidat.id), candidat);
   }
}
