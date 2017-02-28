import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EncountersComponent } from './encounters/encounters.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'encounters', component: EncountersComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent },
  { path: 'report', component: ReportComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EncountersComponent,
    RegisterComponent,
    NotfoundComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
