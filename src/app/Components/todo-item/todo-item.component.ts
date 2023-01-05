import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()
  @Output() todoDoneToggle: EventEmitter<Todo>=new EventEmitter()
  constructor(){}

  onClick(todo: Todo) {
    this.todoDelete.emit(todo)
    console.log("Delete has been triggered")
  }

  doneCheck(todo: Todo)
  {
    this.todoDoneToggle.emit(todo)
  }
}
