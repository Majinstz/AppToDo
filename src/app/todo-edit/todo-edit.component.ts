import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  todoData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
  this.restApi.getTodo(this.id).subscribe((data: {}) => {
    this.todoData = data;
  })
  }

  updateTodo() {
    if(window.confirm('Are you sure, you want to update?')) {
      this.restApi.updateTodo(this.id, this.todoData).subscribe(data => {
        this.router.navigate(['/todo-list'])
      })
    }
  }

}
