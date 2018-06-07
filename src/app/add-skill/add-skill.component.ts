import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router} from '@angular/router';
import { auth } from 'firebase';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {


  data={
    name: '',
    phone: '',
    skill: '',
    province: '',
    price: '',
    comment: ''
    
  }
  email:string=''
  uid:any;
  itemList:AngularFireList<any>

  constructor(private fire:AngularFireAuth,public db:AngularFireDatabase,public router:Router) { 
this.itemList=db.list('skills')

let user = localStorage.getItem('email')
    this.email=user
   this.uid=localStorage.getItem('uid')
    console.log(user)
  }

  ngOnInit() {
    
  }


  insertSkills(){

    this.itemList.push({
    name: this.data.name,
    phone: this.data.phone,
    skill: this.data.skill,
    province: this.data.province,
    price: this.data.price,
    comment: this.data.comment,
    email:this.email,
    uid:this.uid

    })
    this.router.navigate(['/myskills'])
  }

}
