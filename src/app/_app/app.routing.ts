
import { RouterModule, Routes } from '@angular/router';

import { FrontPageComponent } from '../components/front-page/front-page.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { ItemsComponent } from '../components/items/items.component';
import { NewItemComponent } from '../components/new-item/new-item.component';

const appRoutes = [
    { path: '', component: FrontPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'new-item', component: NewItemComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
