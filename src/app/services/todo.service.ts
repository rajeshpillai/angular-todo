import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
@Injectable()
export class TodoService {
  todos = [
    new Todo({id: 1, title: "Learn Angular"}),
    new Todo({id: 2, title: "Learn fundamental React and master modern webdevelopment by building single page application",
      completed: true, edit: false, bookmarked: false
    }),
    new Todo({id: 3, title: "Learn basic HapiJS", completed: false, edit: false, bookmarked: false})
  ];

  constructor() { }

  getTodos() {
    return this.todos;
  }

}
