import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private todoSvc: TodoService) { }

  todos: Todo[] = [];

  inputValue: string = ""


  ngOnInit(): void {
    this.getTodos()

  }

  getTodos(): void {
    this.todoSvc.getAllTodos()
      .then(res => {
        this.todos = res.filter((todo: Todo) => (!todo.completed))
      })
  }
  addTodo(): void {
    this.todoSvc.createTodo(this.inputValue)
    this.inputValue = ""
    this.getTodos()
  }
  doTodo(todo: Todo): void {
    todo.completed = true
    this.todoSvc.changeTodo(todo)
    this.getTodos()
  }
  renameTodo(todo: Todo): void {
    if (!todo.renamingSwitch) {
      todo.renamingSwitch = !todo.renamingSwitch
    }
    else if (todo.renaming != "") {
      todo.renamingSwitch = !todo.renamingSwitch
      todo.title = todo.renaming
      this.todoSvc.changeTodo(todo)
      this.getTodos()
    }
    else {
      todo.renamingSwitch = !todo.renamingSwitch
    }
  }

  


}
