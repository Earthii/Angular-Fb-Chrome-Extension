import {Component, Input} from '@angular/core'
import {NgFacebookService} from "../../../services/Ng-FacebookService";

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

    convo :string[];

    constructor(private ngFb:NgFacebookService){
        this.ngFb.getLoginStatus().then(()=>{
            console.log('constructing conversation')
            this.convo =['hello','world']
        });
    }


}