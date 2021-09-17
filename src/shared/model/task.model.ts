export class ListModel {
    id: number = 0;
    task: string = '';
    priority: string = '';
    date: string = '';
}
export class TaskModel {
    id: number = 0;
    list: string = '';
    task = new ListModel();
}