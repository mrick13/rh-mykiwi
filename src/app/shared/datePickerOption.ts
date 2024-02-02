export class DatePickerOption {
    mois = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre',];
    jour = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi' , 'Jeudi' , 'Vendredi' ,'Samedi']
    jourAbrev = ['D','L','M','M','J','V','S']
    jourShort = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']
    moisShort = ['Jan','Fév','Mar','Avr','Mai','Juin','Jui','Aou','Sep','Oct','Nov','Déc']
    options ={
        format: 'dd/mm/yyyy', //formattage de date en 01/01/2000
        minDate: new Date(1950, 0, 1), // date du début du picker
        defaultDate: new Date(Date.now()),
        i18n: { months: this.mois , 
            weekdays : this.jour , 
            weekdaysAbbrev : this.jourAbrev,
            done : 'valider',
            cancel :'fermer',
            weekdaysShort : this.jourShort,
            monthsShort : this.moisShort,
        }, // mois en français
        maxDate: new Date(Date.now()), // impossible de selectionné les dates après la date actuel
        firstDay : 1,
        yearRange : 70,
        onSelect : (value: Date) =>{
            console.log(value.getDate().toString()+'.'+value.getMonth().toString()+'.'+value.getFullYear().toString());
        },
        formatSubmit : 'dd-mm-yyyy'
    }
}