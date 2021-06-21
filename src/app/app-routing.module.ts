import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: TodoCreateComponent },
  { path: 'create-todo', component: TodoCreateComponent},
  { path: 'todo-list', component: TodoListComponent},
  { path: 'todo-edit/:id', component: TodoEditComponent},
  { path: '**', redirectTo: 'create-todo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
