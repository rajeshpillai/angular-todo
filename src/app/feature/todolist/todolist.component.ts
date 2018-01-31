import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../../models/todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent {
    @Input() todos = [];
    @Output() onDeleteTodo: EventEmitter<string> = new EventEmitter<string>();
    @Output() onToggleEdit: EventEmitter<string> = new EventEmitter<string>();
    @Output() onToggleBookmark: EventEmitter<string> = new EventEmitter<string>();
    @Output() onToggleCompleted: EventEmitter<string> = new EventEmitter<string>();
    @Output() onEditTodo: EventEmitter<any> = new EventEmitter<any>();
    @Output() onUpVote: EventEmitter<string> = new EventEmitter<string>();
    @Output() onDownVote: EventEmitter<string> = new EventEmitter<string>();
    @Output() onShowModal: EventEmitter<string> = new EventEmitter<string>();
    @Output() onTaskDrop: EventEmitter<any> = new EventEmitter<any>();
    
    
    filterAction = "all";

    isModal = false;
    todoModal = null;
  
    constructor() {
    }

  
    deleteTodo(id) {
      this.onDeleteTodo.emit(id);
    }
  
    toggleEdit(id) {
      this.onToggleEdit.emit(id);
    }
  
    toggleBookmark(id) {
      this.onToggleBookmark.emit(id);
    }
  
    toggleCompleted(id) {
      this.onToggleCompleted.emit(id);
    }
  
  
    editTodo(event, id, dirtyTodo) {
      this.onEditTodo.emit({event,id,dirtyTodo});
    }
  

    upVote(todoId) {
      this.onUpVote.emit(todoId);
    }

    downVote(todoId) {
      this.onDownVote.emit(todoId);
    }

    showModal(todoId) {
      this.onShowModal.emit(todoId);
    }

    onDragover(event) {
      event.preventDefault();  // This is important for drop to work.
    }

    onDragStart(event, id) {
      event.dataTransfer.setData("id", id);
      console.log("dragstart: ", id);
    }

    onDrop(event) {
      this.onTaskDrop.emit(event);
    }
}
