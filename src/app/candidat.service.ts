import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat/candidat';
import { child, get, getDatabase, ref, remove, set } from 'firebase/database';
import { Observable, catchError, from, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidatService {
  candidat$!: Observable<Candidat[]>;

  getCandidatList(returnCandidat: boolean): Promise<Candidat[]> {
    const dbRef = ref(getDatabase());
    const candidats: Candidat[] = [];
    return get(child(dbRef, 'candidats'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          for (const candidat of Object.entries<Candidat>(snapshot.val())) {
            //Vérifier si on veut un Candidat ou un collaborateurs
            if (returnCandidat) {
              //Ajouter seulement un candidat
              if (!candidat[1].isRecruited) {
                candidats.push(candidat[1]);
              }
              //Vérifier si on veut un candidat ou un collaborateur
            } else {
              //Ajouter seulement les collaborateur
              if (candidat[1].isRecruited) {
                candidats.push(candidat[1]);
              }
            }
          }
        } else {
          console.log('No data available');
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
      get(child(dbRef, `candidats/${candidatId}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.candidat$ = snapshot.val();
            resolve(snapshot.val());
          } else {
            console.log('No data available');
            reject(snapshot.val());
          }
        })
        .catch((error) => {
          console.error(error);
          reject();
        });
    });
  }

  addCandidat(
    formValue: {
      name: string;
      firstname: string;
      isBorn: string;
      email: string;
      city: string;
      phone: string;
      statut: string;
      nationality: string;
      family: string;
      moving: string;
      experience: string;
      technology: string;
      note: string;
      isRecruited : boolean;
    },
    generatedId: string
  ) {
    const db = getDatabase();
    const candidat: Candidat = {
      ...formValue,
      id: generatedId,
      isRecruited: false,
    };
    return set(ref(db, 'candidats/' + candidat.id), candidat);
  }

  deleteCandidatById(candidatId: string): Promise<void> {
    const dbRef = ref(getDatabase());

    return new Promise<void>((resolve, reject) => {
      const candidatRef = child(dbRef, `candidats/${candidatId}`);
      get(candidatRef).then((snapshot) => {
        if (snapshot.exists()) {
          resolve(remove(candidatRef));
        } else {
          reject(new Error(`Candidat avec l'ID ${candidatId} non trouvé.`));
        }
      });
    });
  }
}
