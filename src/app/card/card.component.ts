import { Interpolation } from '@angular/compiler';
import {Component, Input, OnInit} from '@angular/core';
import { Card } from '../app.component';




@Component({
   selector: 'app-card',
   templateUrl: './card.component.html' ,
   styleUrls: ['./card.component.scss']

})
export  class CardComponent implements OnInit {
  
  @Input() card!: Card 
  @Input() index!: Number 
   title = 'My Card Title'   
   text: string = 'My simple text '
   cardDate: Date = new Date()
   
   textColor: string | undefined

   ngOnInit() {}

   changeTitle(){
      this.card.title = 'Title has been changed!'
   }

   inputHandler(value: string) {
      //const value = event.target.value
      this.title = value

   }
   changeHandler(){
      console.log(this.title)
   }
}
