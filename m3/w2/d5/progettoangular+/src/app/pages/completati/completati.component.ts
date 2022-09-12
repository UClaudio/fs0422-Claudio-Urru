import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  constructor(private todoSvc: TodoService) { }

  doneTodos: Todo[] = [];

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos():void {
    this.todoSvc.getAllTodos()
    .then(res => {
      this.doneTodos = res.filter((todo: Todo) => (todo.completed))
    })
  }

  removeTodo(id:number):void {
    this.todoSvc.deleteTodo(id)
    this.getTodos()
  }

}
