import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Router} from '@angular/router';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.css']
})
export class MyskillsComponent implements OnInit {


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
myUid:any;
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

this.myUid=localStorage.getItem('uid')
  }

  ngOnInit() {
  }

editForm($key){
  for (let value of this.itemArray) {
    if (value['$key']==$key) {
      console.log(value['$key'])

     this.data.name=value['name']
     this.data.phone= value['phone']
      this.data.skill= value['skill']
      this.data.province= value['province']
      this.data.price= value['price']
      this.data.comment=value['comment']

    }
    
    
  }
}


  onEdit($key)
  {
    this.data.name
    this.data.phone
     this.data.skill
     this.data.province
     this.data.price
     this.data.comment

     this.itemList.set($key,{

      name: this.data.name,
      phone: this.data.phone,
      skill: this.data.skill,
      province: this.data.province,
      price: this.data.price,
      comment: this.data.comment
  
     })
     
     this.itemArray=[]

    //  console.log(" key="+$key+" name="+this.data.name+" phone ="+this.data.phone+" skill="+this.data.skill+" provines="+this.data.province+" price="+this.data.price+" comment="+this.data.comment)

  }

  onDelete($key){
  
this.itemList.remove($key);
this.itemArray=[]  ;
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
