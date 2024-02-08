import { Component, Input, Pipe } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent {
  @Input() candidat!: Candidat

  
}
