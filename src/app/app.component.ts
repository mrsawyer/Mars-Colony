import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <p> You decide on new title: <input [(ngModel)]="newTitle"></p>
  <button (click)="changeTitle()"> Change it, yeah</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  newTitle = '';
  clickCount = 0;

  changeTitle(){
    if(this.newTitle === ''){
      this.title = this.title;
    } else{
      this.title = this.newTitle;
    }
  }
}
