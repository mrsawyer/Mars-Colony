import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newColonist: NewColonist;
  marsJobs: Job[];
  public fakeColonist;

  constructor() { 
    //TOTO: Call API, get jobs
    this.marsJobs = [ 
      { name: 'Servant', id: 254, description: 'do everything that your owner asks you to do' },
      { name: 'Seer', id: 257, description: 'a seeing being' },
      { name: 'Mat', id: 295, description: 'lay down and do nothing' },
      { name: 'Tree', id: 295, description: 'stand very still, always' }
      ];
    this.fakeColonist = {};

  }

  ngOnInit() {

  }

}
