import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular TODO App';

  todos = [
    {id: 1, title: "Learn Angular", completed: false},
    {id: 2, title: "Learn fundamental React", completed: true},
    {id: 3, title: "Lear basic HapiJS", completed: false}
  ];

  addTodo(newTodo: HTMLInputElement) {
    var todo = {
      id: this.todos.length + 1,
      title: newTodo.value,
      completed: false
    }

    this.todos.push(todo);

    this.log(this.todos);

    return false;
  }

  log (o) {
    console.log(JSON.stringify(o));
  }
}
