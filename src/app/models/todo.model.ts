export class Todo {
    title: string;
    id: number;
    completed: boolean;
    edit: boolean;
    bookmarked: boolean;
    votes: number;
    upvotes: number;
    downvotes: number;

    constructor (todo) {
        this.title = todo.title;
        this.id = todo.id;
        this.completed = todo.completed || false;
        this.edit = todo.edit || false;
        this.bookmarked = todo.bookmarked || false;
        this.votes = todo.votes ||  0;
        this.upvotes = todo.upvotes || 0;
        this.downvotes =  todo.downvotes || 0;
    }
}