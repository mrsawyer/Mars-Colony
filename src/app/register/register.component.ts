import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewColonist, Job } from '../models';
import { COLONISTS_URL, JOBS_URL } from '../models/API';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ColonistAPIService } from '../apiService/colonists';
import { JobsAPIService } from '../apiService/jobs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ColonistAPIService, JobsAPIService]
})
export class RegisterComponent implements OnInit {

  marsJobs: Job[];
  registerForm: FormGroup;
  clickedButton: boolean;

  constructor(private colonistAPIService: ColonistAPIService, private jobsAPIService: JobsAPIService, private router: Router) { 
    this.getMarsJobs();
    this.clickedButton = false;
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(2)]),
      age: new FormControl('', [Validators.required, this.acceptAge(18, 50)]),
      job_id: new FormControl('none', [Validators.required, this.selectOccupation()])
    });

  }

  theyClick(){
    this.clickedButton = true;
  }

  acceptAge(min: number, max: number){
    return (control: AbstractControl): {[key: string]: any} => {
      if(control.value<min || control.value>max){
        return {'Sorry, good luck!': {age: control.value}};
      }
    }
  }

  selectOccupation(){
    return (control: AbstractControl): {[key: string]: any} => {
      if(control.value == 'none'){
        return {'Not an Occupation!': {job_id: control.value}};
      }
    }
  }

  getMarsJobs(){
    this.jobsAPIService.getMarsJobs()
                      .subscribe((result) => {
                      this.marsJobs = result;
                    });
  }

  postNewColonist(e){
    e.preventDefault();
    if(this.registerForm.invalid){
      //the form is invalid... DO NOTHING, ABSOLUTELY NOTHING
    } else{
      const name = this.registerForm.get('name').value;
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;

      const newColonist = new NewColonist(name, age, job_id);
      const colonistPostRequest = { colonist: newColonist };

      this.colonistAPIService.saveColonist(colonistPostRequest)
                            .subscribe((result) => {
                              console.log('Colonist was saved:', result);
                              localStorage.setItem('colonistID', result.id.toString());
                              this.router.navigate(['encounters']);
                            });
    }
  }

  ngOnInit() {

  }

}
