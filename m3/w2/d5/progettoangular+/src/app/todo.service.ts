import { Injectable } from '@angular/core';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoUrl: string = "http://localhost:3000/todos"


  loading(request:any): void  {

  }
  getAllTodos(): Promise<Todo[]> {
    return new Promise<Todo[]>((resolve) => {
      setTimeout(() => {
        resolve(fetch(this.todoUrl).then(res => {
          this.loading(res.status)
          return res.json()
        }))
        
      }, 2000)
    })
  }
  createTodo(title: string) {
    let newTodo: Todo = new Todo(title)
    let option: {} = {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "content-type": "application/json"
      }
    }
    fetch(this.todoUrl, option)
  }
  changeTodo(todo: Todo) {
    let option: {} = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }
    fetch(this.todoUrl + "/" + todo.id, option)
  }
  deleteTodo(id: number): void {
    let option: {} = {
      method: 'DELETE'
    }
    fetch(this.todoUrl + "/" + id, option)
  }

}
