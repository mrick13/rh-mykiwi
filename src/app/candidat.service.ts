import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat/candidat';
import { child, get, getDatabase, ref, set } from "firebase/database";
import { Observable, catchError, from, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidatService {
  

  getCandidatList(): Promise<Candidat[]> {
    const dbRef = ref(getDatabase());
    const candidats: Candidat[] = [];
  
    return get(child(dbRef, 'candidats'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          for (const candidat of Object.entries<Candidat>(snapshot.val())) {
            candidats.push(candidat[1]);
          }
        } else {
          console.log("No data available");
        }
        return candidats;
      })
      .catch((error) => {
        console.error(error);
        return [];
      });
  }


   addCandidat(candidat: Candidat) {
     const db = getDatabase();
     console.log(candidat);
     return set(ref(db, 'candidats/' + candidat.name), candidat);
   }
}
