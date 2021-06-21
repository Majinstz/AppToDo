import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  Todo: any = [];
  
  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {
    this.loadTodos()
  }

  loadTodos() {
    return this.restApi.getTodos().subscribe((data: {}) => {
      this.Todo = data;
    })
  }

  deleteTodo(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteTodo(id).subscribe(data => {
        this.loadTodos()
      })
    }
  }
  
}
