import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat/candidat';
import { child, get, getDatabase, ref, remove, set } from 'firebase/database';
import { Observable, catchError, from, map, of } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { SearchListComponent } from './search-list/search-list.component';

@Injectable({
  providedIn: 'root',
})
export class CandidatService {
  candidat$!: Observable<Candidat[]>;
  searchInput: string = '';

  constructor(private fbService: FirebaseService) {}

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
      moving: boolean;
      experience: string;
      technology: string;
      note: string;
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
          reject(new Error(`Candidat avec l'ID :${candidatId} non trouvé.`));
        }
      });
    });
  }

  searchFilter(candidat: Candidat): boolean {
    if (this.searchInput.length === 0 || this.searchInput === undefined) {
      return true;
    }
    if (candidat.technology === undefined) {
      candidat.technology = '';
    }
    console.log(candidat.technology);
    
    const searchTypes: string[] = [
      candidat.name.toLowerCase(),
      candidat.firstname.toLowerCase(),
      `${candidat.name + candidat.firstname}`.toLowerCase(),
      `${candidat.firstname + candidat.name}`.toLowerCase(),
      candidat.technology.toString().toLowerCase(),
    ];
    for (let i = 0; i < searchTypes.length; i++) {
      console.log(searchTypes[i]);
      
      if (
        searchTypes[i].includes(
          this.searchInput.toLowerCase().replace(/\s/g, '')
        )
      ) {
        return true;
      }
    }
    return false;
  }

  filterChange(filter: string) {
    this.searchInput = filter;
  }
}
