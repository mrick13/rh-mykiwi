import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../models/candidat/company';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
import { Collapsible } from 'materialize-css';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
})
export class CompanyFormComponent implements OnInit {
  @Input() company!: Company;

  companyForm!: FormGroup;
  companyPreview$!: Observable<Company>;

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    this.companyForm = this.formBuilder.group({
      name: [this.company.name, [Validators.required]],
      collaborateur : [this.company.collaborateur],
    });
  }

  onSubmitForm() {
    const id =
      `${this.companyForm.value.name}${this.companyForm.value.id}`.replaceAll(
        ' ',
        '-'
      );
    this.companyService.addCompany(this.companyForm.value, id).then(() => {
      this.router.navigate(['/homepage']);
    });
  }
}
