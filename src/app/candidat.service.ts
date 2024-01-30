import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat/candidat';
import { getDatabase, ref, set } from "firebase/database";

@Injectable({
  providedIn: 'root',
})
export class CandidatService {
  

   addCandidat(candidat: Candidat) {
     const db = getDatabase();
     console.log(candidat);
     return set(ref(db, 'candidats/' + candidat.name), candidat);
   }
}
