import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="register">Register</a>
    <a routerLink="report">Report</a>
    <a routerLink="encounters">Encounters</a>
    <a routerLink="">Welcome</a>
    <a routerLink="**">Not Found</a>
    <div class="app-container"><router-outlet></router-outlet></div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
}
