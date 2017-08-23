import {Component, Input} from '@angular/core'

@Component({
    selector:'conversation',
    styleUrls:[
        './conversation.style.scss'
    ],
    templateUrl : './conversation.template.html'

})
export class ConversationComponent{
    @Input()
    currentFriend : any;
}