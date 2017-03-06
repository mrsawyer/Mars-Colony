import { Component, OnInit } from '@angular/core';
import { Encounter } from '../models';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { EncountersAPIService } from '../apiService/encounters';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [EncountersAPIService]
})
export class EncountersComponent implements OnInit {

  marsEncounters: Encounter[];

  constructor(private encountersAPIService: EncountersAPIService) { 
    this.getMarsEncounters();
  }

  getMarsEncounters(){
    this.encountersAPIService.getMarsEncounters()
                            .subscribe((result) => {
                            this.marsEncounters = result;
                          });
  }

  ngOnInit() {
  }

}
