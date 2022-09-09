import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletatiComponent } from './pages/completati/completati.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
  {
    path: "",
    component: TodoComponent
  },
  {
    path: "completed",
    component: CompletatiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
