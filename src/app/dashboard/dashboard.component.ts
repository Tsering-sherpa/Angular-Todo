import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListModel, TaskModel } from 'src/shared/model/task.model';
import { CreateListDialogComponent } from '../dialogs/create-list-dialog/create-list-dialog.component';
import { CreateTaskDialogComponent } from '../dialogs/create-task-dialog/create-task-dialog.component';
import { ListApiService } from '../service/list/list-api.service';
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
  listData: any;
  taskData: any;
  listCount!: number;
  taskCount!: number;

  listModelObj: ListModel = new ListModel();

  constructor(private dialogRef: MatDialog, private listApi: ListApiService, private taskApi: ApiService) {
  }

  openCreateTaskDialog() {
    const dialogRef = this.dialogRef.open(CreateTaskDialogComponent, {
      data: { task: this.task, list: this.listData, priority: this.priority, time: this.time },
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
    });
  }

  getAllList() {
    this.listApi.getList().subscribe(res => {
      this.listData = res;
      this.listCount = Object.keys(res).length;
    })
  }

  getAllTask() {
    this.taskApi.getTask().subscribe(res => {
      this.taskData = res;
      this.taskCount = Object.keys(res).length;
    })
  }


  today: number = Date.now();

  panelOpenState = false;

  ngOnInit() {
    this.getAllList();
    this.getAllTask();
  }
}

