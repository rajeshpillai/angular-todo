export class Todo {
    title: string;
    id: number;
    completed: boolean;
    edit: boolean;
    bookmarked: boolean;

    constructor (todo) {
        this.title = todo.title;
        this.id = todo.id;
        this.completed = todo.completed || false;
        this.edit = todo.edit || false;
        this.bookmarked = todo.bookmarked || false;
    }
}