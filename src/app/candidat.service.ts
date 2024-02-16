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
    // Initialiser la connexion a la db firebase
    const dbRef = ref(getDatabase());
    // Retourner la promesse après avoir récuperer le candidat par son ID
    return new Promise((resolve, reject) => {
      // Récuperer le candidat avec l'ID dans la db firebase
      get(child(dbRef, `candidats/${candidatId}`))
        .then((candidat) => {
          // Vérifier si le candidat a été récupérer
          if (candidat.exists()) {
            // Stocker le candidat récupérer
            this.candidat$ = candidat.val();
            resolve(candidat.val());
          } else {
            // Retourner une erreur si aucun candidat n'a été trouvé
            console.log('No data available');
            reject(candidat.val());
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
      dateChangement: null 
    };
    return set(ref(db, 'candidats/' + candidat.id), candidat);
  }

  deleteCandidatById(candidatId: string): Promise<void> {
    const dbRef = ref(getDatabase());
    // Retourner la promesse après avoir supprimer un candidat
    return new Promise<void>((resolve, reject) => {
      // Initialiser la connexion a la db firebase
      const candidatRef = child(dbRef, `candidats/${candidatId}`);
      // Récuperer le candidat à supprimer dans la db firebase
      get(candidatRef).then((candidat) => {
        // Vérifier si le candidat a été récupérer
        if (candidat.exists()) {
          // Supprimer un candidat
          resolve(remove(candidatRef));
        } else {
          // Retourner l'erreur si impossible de supprimer le candidat
          reject(new Error(`Candidat avec l'ID :${candidatId} non trouvé.`));
        }
      });
    });
  }

  searchFilter(candidat: Candidat): boolean {
    // Vérifier si le champ de recherche est vide ou undefined
    if (this.searchInput.length === 0 || this.searchInput === undefined) {
      return true;
    }
    // Forcer le candidat.technology en string pour les champs vide
    if (candidat.technology === undefined) {
      candidat.technology = '';
    }
    // paramètres de recherches avec nom, prenom, technologie , nationalité 
    const searchTypes: string[] = [
      candidat.name.toLowerCase(),
      candidat.firstname.toLowerCase(),
      `${candidat.name + candidat.firstname}`.toLowerCase(),
      `${candidat.firstname + candidat.name}`.toLowerCase(),
      candidat.technology.toString().toLowerCase(),
      candidat.nationality.toLowerCase()
    ];
    // boucle pour la recherche a chaque lettres écrite
    for (let i = 0; i < searchTypes.length; i++) {
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
