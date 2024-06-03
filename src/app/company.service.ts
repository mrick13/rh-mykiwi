import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './models/candidat/company';
import { FirebaseService } from './firebase.service';
import { child, get, getDatabase, ref, remove, set } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  company$!: Observable<Company[]>;
  searchInput : string='';

  constructor(private fbService: FirebaseService) {}

  // getCompanyList(returnCompany: boolean): Promise<Company[]> {
  //   const dbRef = ref(getDatabase());
  //   const companies: Company[] = [];
  //   return get(child(dbRef,'companies'))
  //     .then((snapshot)=> {
  //       if(snapshot.exists()) {
  //         for (const company of Object.entries<Company>(snapshot.val()))
           
  //       }
  //     })
  // }
  getCompanyById(companyId: string): Promise<Company> {
    const dbRef = ref(getDatabase());
    return new Promise((resolve , reject) => {
      get(child(dbRef, `companies/${companyId}`))
        .then((company) =>{
          if (company.exists()) {
            this.company$ = company.val() ;
            resolve(company.val());
          } else {
            console.log('No Data available');
            reject(company.val())
          }
        })
        
    })
  }

  addCompany(
    formValue: {
      name: string;
    },
    generatedId: string
  ) {
    const db = getDatabase();
    const company : Company = {
      ...formValue,
      id: generatedId,
      description: ''
    };
    return set(ref(db, 'companies/' + company.id), company);
  }

  deleteCompanyById(companyId: string): Promise<void> {
    const dbRef = ref(getDatabase());
    // Retourner la promesse après avoir supprimer une entreprise
    return new Promise<void>((resolve, reject) => {
      // Initialiser la connexion a la db firebase
      const companyRef = child(dbRef, `companies/${companyId}`);
      // Récuperer l'entreprise à supprimer dans la db firebase
      get(companyRef).then((company) => {
        // Vérifier si l'entreprise a été récupérer
        if (company.exists()) {
          // Supprimer une entreprise
          resolve(remove(companyRef));
        } else {
          // Retourner l'erreur si impossible de supprimer l'entreprise
          reject(new Error(`Company avec l'ID :${companyId} non trouvé.`));
        }
      });
    });
  }



}
