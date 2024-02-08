import { Component, Input, Pipe } from '@angular/core';
import { Candidat } from '../models/candidat/candidat';
import { CustomPhonePipe } from '../shared/custom-phone.pipe';
import { CustomDatePipe } from '../shared/custom-date.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent {
  @Input() candidat!: Candidat
}
