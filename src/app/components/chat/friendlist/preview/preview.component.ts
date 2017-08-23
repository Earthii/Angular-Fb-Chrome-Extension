import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Friend} from "../../../../models/Friend";

@Component({
    selector: 'preview',
    styleUrls: [
        './preview.style.scss'
    ],
    templateUrl: './preview.template.html'
})
export class PreviewComponent {
    @Input()
    friend: Friend;

    @Output()
    viewConversation : EventEmitter<Friend> = new EventEmitter();

    constructor() {
    }

    handleViewConversation(){
        console.log("view conversation with "+ this.friend.name);
        this.viewConversation.emit(this.friend)
    }
}