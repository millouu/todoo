import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/todo';
import { FormsModule ,FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string
  desc: string
  submitted:FormGroup
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter()
  
  onSubmit(submitted:NgForm)
  {
    const todo = {
      sno:10,
      title: this.title,
      desc: this.desc,
      active:true
    }
    this.addTodo.emit(todo)
    submitted.reset()
  }
}
