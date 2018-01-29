import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular TODO App';

  todos = [
    {id: 1, title: "Learn Angular", completed: false, edit: false},
    {id: 2, title: "Learn fundamental React", completed: true, edit: false},
    {id: 3, title: "Lear basic HapiJS", completed: false, edit: false}
  ];

  addTodo(newTodo: HTMLInputElement) {
    var todo = {
      id: this.todos.length + 1,
      title: newTodo.value,
      completed: false,
      edit: false
    }
    this.todos.push(todo);
    this.log(this.todos);
    return false;
  }

  deleteTodo(id) {
    var newTodos = this.todos.filter ((todo) => {
      return todo.id !=id;
    });

    this.todos = newTodos;
  }

  toggleEdit(id) {
    var todoEdit = this.todos.find((todo) => {
      return todo.id == id;
    });
    todoEdit.edit = !todoEdit.edit;
    this.log ("edit: ", todoEdit);
  }

  log (...args) {
    for(var i = 0; i < args.length; i++) {
     console.log(JSON.stringify(args[i]));
    }
  }
}
