import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PizzeListComponent } from './pizze/pizze-list/pizze-list.component';
import { PizzeComponent } from './pizze/pizze/pizze.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "pizze",
    component: PizzeComponent,
    children : [
      {
        path: "",
        component: PizzeListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
