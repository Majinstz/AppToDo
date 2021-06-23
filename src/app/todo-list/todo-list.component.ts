import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  Todo: any = [];
  @Input() todoDetails = { content: '' }
  
  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadTodos()
  }

  loadTodos() {
    return this.restApi.getTodos().subscribe((data: {}) => {
      this.Todo = data;
    })
  }

  onToggleTodoDone(todo) {
    this.restApi.toggleTodoDone(todo).subscribe(data => {
      this.loadTodos()
    });
  }

  addTodo() {
    if( this.todoDetails.content != "") {
    this.restApi.createTodo(this.todoDetails).subscribe((data: {}) => {
      this.loadTodos()
    })
  }
  }

    deleteTodo(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteTodo(id).subscribe(data => {
        this.loadTodos()
      })
    }
  }
  
}
