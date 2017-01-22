//import
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core'

//decorator
@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
//class
export class StarComponent {
    @Input() rating: number;
    starWidth : number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5;
    }

    onClick(): void{
        //ratingClicked is the notifier binding to the output in Product-list.component.html
        //message is emited to $event
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}