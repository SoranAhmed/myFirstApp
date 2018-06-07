import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Router} from '@angular/router';
import { Key } from 'protractor';



@Component({
  selector: 'app-allskills',
  templateUrl: './allskills.component.html',
  styleUrls: ['./allskills.component.css']
})
export class AllskillsComponent implements OnInit {

  itemList:AngularFireList<any>
   itemArray=[]



   data={
    name: '',
    phone: '',
    skill: '',
    province: '',
    price: '',
    comment: ''
    
   }
  constructor(public db:AngularFireDatabase ,public router:Router) { 

    this.itemList=db.list('skills')

this.itemList.snapshotChanges().subscribe(Actions=>{
  Actions.forEach(Action =>{ 
let y= Action.payload.toJSON()
y['$key']=Action.key
this.itemArray.push(y as listItemClass)

})
console.log(this.itemArray)
})



  }

  ngOnInit() {
  }


  moreInfo($key){
    
    this.router.navigate(['Details/'+$key])


  }
}



class listItemClass{
  $key:string;
  name: string;
    phone: string;
    skill: string;
    province: string;
    price: string;
    comment: string;
}