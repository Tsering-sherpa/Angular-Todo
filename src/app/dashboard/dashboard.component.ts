import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateListDialogComponent } from '../dialogs/create-list-dialog/create-list-dialog.component';
import { CreateTaskDialogComponent } from '../dialogs/create-task-dialog/create-task-dialog.component';
import { TaskServiceService } from '../service/task-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data : any;
  task!: string;
  list!: string;
  priority!: string;
  time!: number;
  dialog: any;

  constructor(private dialogRef: MatDialog, private taskService: TaskServiceService) {
  }

  openCreateTaskDialog() {
    const dialogRef = this.dialogRef.open(CreateTaskDialogComponent, {
      data: { task: this.task, list: this.list, priority: this.priority, time: this.time },
      width: '768px',
    });

    dialogRef.afterClosed().subscribe((result: []) => {
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
