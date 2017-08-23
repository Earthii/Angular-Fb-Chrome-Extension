import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Friend} from "../../../models/Friend";

@Component({
    selector:'friend-list',
    styleUrls:[
        './friendlist.style.scss'
    ],
    templateUrl : './friendlist.template.html'

})
export class FriendlistComponent{

    @Input()
    friends : Friend[];

    @Output()
    viewConversation : EventEmitter<Friend> = new EventEmitter();

    handleViewConversation(event) : void {
        this.viewConversation.emit(event);
    }
}
