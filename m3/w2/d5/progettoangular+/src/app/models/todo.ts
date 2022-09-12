export class Todo {
    id!: number;
    title!: string
    completed: boolean = false;
    renaming: string = "";
    renamingSwitch: boolean = false;
    constructor(title: string) {
        this.title = title;
    }
}
