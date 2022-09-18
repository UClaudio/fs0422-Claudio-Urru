import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UsersItemComponent } from './users-item/users-item.component';
import { UserslistComponent } from './userslist/userslist.component';

const routes: Routes = [
  {
   path: '', 
   component: HomeComponent 
  },
  {
    path: 'users',
    component: UserslistComponent
  },
  {
    path: 'users/detail/:id',
    component: UsersItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
