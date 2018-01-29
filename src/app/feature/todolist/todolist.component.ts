import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

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
  
  
    constructor() {
      this.filteredTodos = [...this.todos];
    }
  
    addTodo(newTodo: HTMLInputElement) {
      if (newTodo.value.trim() === "") {
        alert("Hmm..something is missing :(.  Please enter some task.");
        return false;
      }
      var todo = new Todo ({
        id: this.todos.length + 1,
        title: newTodo.value,
        completed: false,
        edit: false,
        bookmarked: false
      });
      this.todos.push(todo);
  
      this.changeFilter(this.filterAction);
  
      this.log(this.todos);
      newTodo.value = "";
      return false;
    }
  
    deleteTodo(id) {
      var newTodos = this.todos.filter ((todo) => {
        return todo.id !=id;
      });
  
      this.todos = newTodos;
  
      this.changeFilter(this.filterAction);
    }
  
    toggleEdit(id) {
      var todoEdit =  this._findTodo(id);
      todoEdit.edit = !todoEdit.edit;
      this.log ("edit: ", todoEdit);
    }
  
    toggleBookmark(id) {
      var found =  this._findTodo(id);
      found.bookmarked = !found.bookmarked;
      this.log ("bookmark: ", found);
    }
  
    toggleCompleted(id) {
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
  
    editTodo(event, id, dirtyTodo) {
      // if cancelled
      if (event.which === 27) {
        this.toggleEdit(id);
        return;
      }
      if (event.which === 13) { // enter key
        var found = this._findTodo(id);
        found.title = dirtyTodo;
        this.toggleEdit(id);
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
  
    log (...args) {
      for(var i = 0; i < args.length; i++) {
       console.log(JSON.stringify(args[i]));
      }
    }

}
