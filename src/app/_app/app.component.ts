/***********
 COMPONENTS
*/

import { AppComponent } from '../root/app.component';
import { FrontPageComponent } from '../components/front-page/front-page.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { ItemsComponent } from '../components/items/items.component';
import { ItemComponent } from '../components/items/item/item.component';
import { ZoomItemComponent } from '../components/items/zoom-item/zoom-item.component';
import { NewItemComponent } from '../components/new-item/new-item.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { QueueItemsComponent } from '../components/user-profile/queue-items/queue-items.component';
import { ApprovedItemsComponent } from '../components/user-profile/approved-items/approved-items.component';

export const components = [
    AppComponent,
    FrontPageComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ItemsComponent,
    ItemComponent,
    NewItemComponent,
    UserProfileComponent,
    QueueItemsComponent,
    ApprovedItemsComponent,
    ZoomItemComponent,
];