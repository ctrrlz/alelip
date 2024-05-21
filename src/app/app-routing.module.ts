import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
    {path: 'menu/:type', component: MenuComponent},
    {path: 'profile', component: ProfileComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
