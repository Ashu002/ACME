import {Component, OnInit,  Input, Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'ai-star',
    templateUrl:'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnInit {
 @Input() rating: number;
 starWidth: number;   
 @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

 ngOnInit(): void{
    this.starWidth = this.rating * 85/5;
 }

 onClick():void{
     this.ratingClicked.emit(`The rating ${this.rating} was clicked!`)
 }
}