import {Component, OnInit} from '@angular/core'
import {Friend} from "../../models/Friend";
import {NgFacebookService} from "../../services/Ng-FacebookService";

@Component({
    selector: 'chat',
    styleUrls: [
        './chat.style.scss'
    ],
    templateUrl: './chat.template.html'

})
export class ChatComponent implements OnInit {

    friends: Friend[];
    currentFriend: Friend;

    constructor(private ngFb: NgFacebookService) {

    }

    ngOnInit(): void {
        this.friends = [
            {
                name: 'Eric Xiao',
                previewMsg: 'Hello world'
            },
            {
                name: 'Laurendy Lam',
                previewMsg: 'Hello world2'
            },
            {
                name: 'Tom',
                previewMsg: 'Hello world3'
            },
        ];

        this.currentFriend = this.friends[0];

    }

    handleViewConversation(event): void {
        this.currentFriend = event;
    }

    test(){
        this.ngFb.getLoginStatus();
        this.ngFb.callApi("/me");
    }
}
