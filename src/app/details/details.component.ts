import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';

import { Router} from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  itemList:AngularFireList<any>
  itemArray=[]
  id:any;


  data={
    name: '',
    phone: '',
    skill: '',
    province: '',
    price: '',
    comment: '',
    email:''
    
   }

  constructor(public db:AngularFireDatabase ,private route :ActivatedRoute) { 

    this.route.params.subscribe(params=>{
      
      this.id=params


      this.itemList=db.list('skills')

      this.itemList.snapshotChanges().subscribe(Actions=>{
        Actions.forEach(Action =>{ 
      let y= Action.payload.toJSON()
      y['$key']=Action.key
      if(Action.key===this.id['id']){
      this.itemArray.push(y as listItemClass)
      }
      })
      console.log(this.itemArray[0]['name'])

      this.data.name=this.itemArray[0]['name']
      this.data.phone=this.itemArray[0]['phone']
      this.data.province=this.itemArray[0]['province']
      this.data.price=this.itemArray[0]['price']
      this.data.skill=this.itemArray[0]['skill']
      this.data.comment=this.itemArray[0]['comment']  
      this.data.email=this.itemArray[0]['email']
    
    })
      


      
     });
  }

  ngOnInit() {
    console.log(this.id['id'])
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
    email: string;
}
