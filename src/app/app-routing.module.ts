import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent} from './aboutus/aboutus.component';
import { CEOComponent } from './ceo/ceo.component';
import { CountrymanagerComponent } from './countrymanager/countrymanager.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeemoduleComponent } from './employeemodule/employeemodule.component';
import { ErrorComponent } from './error/error.component';
import { FounderComponent } from './founder/founder.component';
import { HeadofSoftwareengineeringComponent } from './headof-softwareengineering/headof-softwareengineering.component';
import { HomeComponent } from './home/home.component';
import { RouterparameterComponent } from './routerparameter/routerparameter.component';
import { TeamLeadComponent } from './team-lead/team-lead.component';
import { TeamMembersComponent } from './team-members/team-members.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component: AboutusComponent},
  {path:'routerparameter',component: RouterparameterComponent},
  {path:'employeemodule',component:EmployeemoduleComponent},
  {path:'employeedetails',component:EmployeedetailsComponent,children:[
   {path:'fou',component:FounderComponent,children:[
     {path:'CEO',component:CEOComponent,children:[
       {path:'countrymanager',component:CountrymanagerComponent,children:[
         {path:'HeadofSoftwareengineering',component:HeadofSoftwareengineeringComponent,children:[
           {path:'Teamlead',component:TeamLeadComponent,children:[
             {path:'Team-Members',component:TeamMembersComponent}
           ]}
         ]}
       ]}
     ]}
   ]}  
  ]},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
