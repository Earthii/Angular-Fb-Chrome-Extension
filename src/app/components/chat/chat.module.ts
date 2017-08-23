import {NgModule} from '@angular/core'
import {SharedModule} from "../../shared.module";

import {ConversationComponent} from './conversation/conversation.component'
import {FriendlistComponent} from './friendlist/friendlist.component'
import {PreviewComponent} from "./friendlist/preview/preview.component";
import {NgFacebookService} from "../../services/Ng-FacebookService";

@NgModule({
    declarations: [
        ConversationComponent,
        FriendlistComponent,
        PreviewComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        ConversationComponent,
        FriendlistComponent
    ],
    providers: [
        NgFacebookService
    ]
})
export class ChatModule {

}