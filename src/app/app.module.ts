import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { AllskillsComponent } from './allskills/allskills.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { DetailsComponent } from './details/details.component';
import { UserprofileComponent } from './userprofile/userprofile.component';




const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full' },
  {path:'home', component:HomeComponent},
  {path:'addskill', component:AddSkillComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'myskills', component:MyskillsComponent},
  {path:'allskills', component:AllskillsComponent},
  {path:'Details/:id', component:DetailsComponent},
  {path:'Userprofile', component:UserprofileComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddSkillComponent,
    LoginComponent,
    RegisterComponent,
    MyskillsComponent,
    AllskillsComponent,
    DetailsComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
