import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  localItem: string|null;
  todos: Todo[];
  
  constructor() {
    this.localItem =localStorage.getItem("todos")
    if(this.localItem==null)
      this.todos = []
    else {
      this.todos=JSON.parse(this.localItem)
    }
  }

  deleteTodo(todo:Todo)
  {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  todoAdd(todo:Todo)
  {
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  doneTodo(todo: Todo)
  {
    const index = this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
