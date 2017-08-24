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
                previewMsg: 'Hello world',
                messages : [
                    'Message 1',
                    'Message 2'
                ]
            },
            {
                name: 'Laurendy Lam',
                previewMsg: 'Hello world2',
                messages : [
                    'Message 3',
                    'Message 4'
                ]
            },
            {
                name: 'Tom',
                previewMsg: 'Hello world3',
                messages : [
                    'Message 5',
                    'Message 6'
                ]
            },
        ];

        this.currentFriend = this.friends[0];

    }

    handleViewConversation(event): void {
        console.log(event);
        this.currentFriend = event;
    }
}
