export class Candidat { 
  id! : string ;
  name! : string;
  firstname! : string;
  isBorn! : string;
  email! : string;
  city! : string;
  phone! : string;  //numéro de téléphone
  statut! : string;
  nationality! : string;
  family! : string;  //situation familiale
  moving! : string;  //moyen de déplacement
  experience! : string[]; 
  technology! : string[];  //technologies utilisé par le candidat
  note! : string; //note d'entretien 
  isRecruited! : boolean ; //recruté ou pas
 }
