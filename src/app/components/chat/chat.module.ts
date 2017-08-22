import { NgModule } from '@angular/core'

import { ConversationComponent } from './conversation/conversation.component'
import { FriendlistComponent } from './friendlist/friendlist.component'

@NgModule({
    declarations:[
        ConversationComponent,
        FriendlistComponent
    ],
    imports:[

    ],
    exports:[
        ConversationComponent,
        FriendlistComponent
    ],
    providers:[

    ]
})
export class ChatModule{

}