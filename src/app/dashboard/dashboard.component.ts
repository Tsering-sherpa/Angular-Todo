import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModel } from 'src/shared/model/task.model';
import { CreateListDialogComponent } from '../dialogs/create-list-dialog/create-list-dialog.component';
import { CreateTaskDialogComponent } from '../dialogs/create-task-dialog/create-task-dialog.component';
import { TaskServiceService } from '../service/task-service.service';
import { ApiService } from '../service/task/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  task!: string;
  list!: string;
  priority!: string;
  time!: string;
  dialog: any;

  taskModelObj: TaskModel = new TaskModel();

  constructor(private dialogRef: MatDialog, private taskService: TaskServiceService, private taskapi: ApiService) {
  }

  openCreateTaskDialog() {
    const dialogRef = this.dialogRef.open(CreateTaskDialogComponent, {
      data: { task: this.task, list: this.list, priority: this.priority, time: this.time },
      width: '768px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.data = result;
    });
  }

  openCreateListDialog() {
    const dialogRef = this.dialogRef.open(CreateListDialogComponent, {
      data: { list: this.list },
      width: '768px',
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
      this.list = result;
      this.taskModelObj.list = result;
      this.taskapi.postTask(this.taskModelObj).
        subscribe(res => {
          console.log(res);
          alert("Task added successfully")
        },
          err =>
            alert("Something went wrong" + err))
    });
  }

  today: number = Date.now();

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  panelOpenState = false;

  ngOnInit() {
    this.taskService.getData().subscribe((data: any) => {
      this.data = data;
      console.warn(data);
    }
    )
  }
}

