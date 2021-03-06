import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {  Routes, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  private isLoggedIn: Boolean= false;
  private email: String;
  constructor(public afAuth: AngularFireAuth, public router:Router) { 
    

    let status = localStorage.getItem('isLoggedIn')
    console.log(status)

    if (status === 'true') {
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
  }

  ngOnInit() {
  }

  logout(){

    this.afAuth.auth.signOut();
    this.isLoggedIn = false
    localStorage.setItem('isLoggedIn','false')
    this.router.navigate(['/login'])
  }

}


