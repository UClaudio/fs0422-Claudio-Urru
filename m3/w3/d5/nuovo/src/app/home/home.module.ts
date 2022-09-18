import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UsersItemComponent } from './users-item/users-item.component';
import { UserslistComponent } from './userslist/userslist.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    UsersItemComponent,
    UserslistComponent,
    PostItemComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
