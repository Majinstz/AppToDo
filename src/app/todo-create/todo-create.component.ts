import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  @Input() todoDetails = { content: '' }

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  addTodo() {
    this.restApi.createTodo(this.todoDetails).subscribe((data: {}) => {
      this.router.navigate(['/todo-list'])
    })
  }
}
