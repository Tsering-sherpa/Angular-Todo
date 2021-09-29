export class TaskModel {
    id: number = 0;
    task: string = '';
    priority: string = '';
    date: any;
    list = new ListModel();
}

export class ListModel {
    id: number = 0;
    list: string = '';
}