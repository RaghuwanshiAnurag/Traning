import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { RouterparameterComponent } from './routerparameter/routerparameter.component';
import { EmployeemoduleComponent } from './employeemodule/employeemodule.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { FounderComponent } from './founder/founder.component';
import { CEOComponent } from './ceo/ceo.component';
import { CountrymanagerComponent } from './countrymanager/countrymanager.component';
import { HeadofSoftwareengineeringComponent } from './headof-softwareengineering/headof-softwareengineering.component';
import { TeamLeadComponent } from './team-lead/team-lead.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { ErrorComponent } from './error/error.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NgfilterComponent } from './ngfilter/ngfilter.component';
import { HighlightDirective } from './highlight.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProficiencyPipe } from './proficiency.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomeComponent,
    RouterparameterComponent,
    EmployeemoduleComponent,
    EmployeedetailsComponent,
    FounderComponent,
    CEOComponent,
    CountrymanagerComponent,
    HeadofSoftwareengineeringComponent,
    TeamLeadComponent,
    TeamMembersComponent,
    ErrorComponent,
    NgfilterComponent,
    HighlightDirective,
    ParentComponent,
    ChildComponent,
    ProficiencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
