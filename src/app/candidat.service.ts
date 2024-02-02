import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat/candidat';
import { child, get, getDatabase, ref, set } from "firebase/database";
import { Observable, catchError, from, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidatService {
  
  candidat$! : Observable<Candidat[]>

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

  getCandidatById(candidatId: string): Promise<Candidat> {
    const dbRef = ref(getDatabase());
    return new Promise((resolve, reject) => {
      get(child(dbRef, `candidats/${candidatId}`)).then((snapshot) => {
        if (snapshot.exists()) {
          this.candidat$ = snapshot.val();
          resolve(snapshot.val());
        } else {
          console.log("No data available");
          reject(snapshot.val());
        }
      }).catch((error) => {
        console.error(error);
        reject();
      });
    });    
  }

   addCandidat(candidat: Candidat) {
     const db = getDatabase();
     console.log(candidat);
     return set(ref(db, 'candidats/' + candidat.name), candidat);
   }
}
