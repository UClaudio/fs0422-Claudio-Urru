export class Todo {
    id!: number;
    title!: string
    completed: boolean = false;
    constructor(title: string) {
        this.title = title;
    }
}
