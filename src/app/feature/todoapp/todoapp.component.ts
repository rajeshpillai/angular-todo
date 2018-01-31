import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo.model';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent {
  title = 'Angular TODO App';
  
    todos = [
      new Todo({id: 1, title: "Learn Angular"}),
      new Todo({id: 2, title: "Learn fundamental React and master modern webdevelopment by building single page application", 
        completed: true, edit: false, bookmarked: false
      }),
      new Todo({id: 3, title: "Learn basic HapiJS", completed: false, edit: false, bookmarked: false})
    ];
  
    filteredTodos = [];
  
    filterAction = "all";

    isModal = false;
    todoModal = null;
    droppedTask = null;
  
    constructor() {
      this.filteredTodos = [...this.todos];
    }


    onNewTodo(newTodo) {
      this.addTodo(newTodo);
    }    
  
    addTodo(newTodo: string) {
      var todo = new Todo ({
        id: this.todos.length + 1,
        title: newTodo,
        completed: false,
        edit: false,
        bookmarked: false
      });
      this.todos.push(todo);
  
      this.changeFilter(this.filterAction);
  
      this.log(this.todos);
      return false;
    }
  
    onDeleteTodo(id) {
      var newTodos = this.todos.filter ((todo) => {
        return todo.id !=id;
      });
  
      this.todos = newTodos;
  
      this.changeFilter(this.filterAction);
    }
  
    onToggleEdit(id) {
      var todoEdit =  this._findTodo(id);
      todoEdit.edit = !todoEdit.edit;
      this.log ("edit: ", todoEdit);
    }
  
    onToggleBookmark(id) {
      var found =  this._findTodo(id);
      found.bookmarked = !found.bookmarked;
      this.log ("bookmark: ", found);
    }
  
    onToggleCompleted(id) {
      var found =  this._findTodo(id);
      found.completed = !found.completed;
      this.log ("completed: ", found);
    }
  
    _findTodo(id) {
      var found = this.todos.find((todo) => {
        return todo.id == id;
      });
      return found;
    }
  
    editTodo(e) {
      // if cancelled
      if (e.event.which === 27) {
        this.onToggleEdit(e.id);
        return;
      }
      if (e.event.which === 13) { // enter key
        var found = this._findTodo(e.id);
        found.title = e.dirtyTodo;
        this.onToggleEdit(e.id);
      }
    }
  
    onFilterChange(event) {
      if (!event.target.name) return;
      var action = event.target.name.toLowerCase();
      this.filterAction = action;
      this.changeFilter(action);
    }
  
    changeFilter(action) {
      switch (action) {
        case "all": 
          this.filteredTodos =[...this.todos];
          break;
        case "completed":
          this.filteredTodos = this.todos.filter((todo) => {
             return todo.completed;
          });
          break;
        case "bookmarked":
          this.filteredTodos = this.todos.filter((todo) => {
            return todo.bookmarked;
          });
          break;
      }
    }

    upVote(todoId) {
      var found = this._findTodo(todoId);
      found.upvotes++;
      found.votes++;
    }

    downVote(todoId) {
      var found = this._findTodo(todoId);
      found.downvotes++;
      found.votes--;
    }

    showModal(todoId) {
      var found = this._findTodo(todoId);
      this.todoModal = found;
      this.isModal = true;
    }

    onDragover(event) {
      event.preventDefault();  // This is important for drop to work.
    }

    onDragStart(event, id) {
      event.dataTransfer.setData("id", id);
      console.log("dragstart: ", id);
    }

    onDrop(event) {
      var id = event.dataTransfer.getData("id");
      console.log(`DROPPED task ${id}`);
      this.droppedTask = this._findTodo(id);
    }
  
  
    log (...args) {
      for(var i = 0; i < args.length; i++) {
       console.log(JSON.stringify(args[i]));
      }
    }

}
