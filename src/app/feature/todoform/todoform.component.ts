import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Todo} from '../../models/todo.model';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  @Output() onNewTodo: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(newTodo: HTMLInputElement) {
    if (newTodo.value.trim() === "") {
      alert("Hmm..something is missing :(.  Please enter some task.");
      return false;
    }

    this.onNewTodo.emit(newTodo.value);
    newTodo.value="";
    return false;
  }
}
