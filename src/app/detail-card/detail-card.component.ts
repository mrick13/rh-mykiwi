import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss'],
})
export class DetailCardComponent {
  @Input() candidat!: Candidat;

  textDate(): string {
    if (!this.candidat.dateChangement ) {
      return "N'a jamais travaillé chez MyKiwi";
    } else if (this.candidat.dateChangement !== null && this.candidat.isRecruited) {
      return 'Travail chez MyKiwi depuis le :';
    }
    return 'Ne travaille plus chez MyKiwi depuis le :';
  }
}
