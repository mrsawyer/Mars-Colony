import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NewEncounter, Alien } from '../models';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { EncountersAPIService } from '../apiService/encounters';
import { AliensAPIService } from '../apiService/aliens';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [EncountersAPIService, AliensAPIService]
})

export class ReportComponent implements OnInit {

  marsAliens: Alien[];
  reportForm: FormGroup;
  clickedButton: boolean;

  constructor(private encountersAPIService: EncountersAPIService, private aliensAPIService: AliensAPIService, private router: Router) { 
    this.getMarsAliens();
    this.clickedButton = false;
    this.reportForm = new FormGroup({
      atype: new FormControl('none', [Validators.required, this.selectAlien()]),
      action: new FormControl('', [Validators.required]),
    });
  }

  selectAlien(){
    return (control: AbstractControl): {[key: string]: any} => {
      if(control.value == 'none'){
        return {'Not an Alien!': {atype: control.value}};
      }
    }
  }

  getMarsAliens(){
    this.aliensAPIService.getMarsAliens()
                      .subscribe((result) => {
                      this.marsAliens = result;
                    });
  }

  postNewEncounter(e){
    e.preventDefault();
    if(this.reportForm.invalid){
      //the form is invalid... DO NOTHING, ABSOLUTELY NOTHING
    } else{
      const atype = this.reportForm.get('atype').value;
      const action = this.reportForm.get('action').value;
      const date = new Date().toISOString().substring(0, 10);
      const colonist_id = localStorage.getItem('colonistID');      
      const newEncounter = new NewEncounter(date, colonist_id, atype, action);
      const encountersPostRequest = { encounter: newEncounter }

      this.encountersAPIService.saveEncounter(encountersPostRequest)
                            .subscribe((result) => {
                              console.log('Encounter was saved:', result);
                              this.router.navigate(['encounters']);
                            });
    }
  }

   theyClick(){
    this.clickedButton = true;
  }


  ngOnInit() {
  }

}
