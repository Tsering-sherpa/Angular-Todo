import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/task/api.service';
import { TaskModel } from 'src/shared/model/task.model';

export interface DialogData {
  task: string;
  list: any;
  priority: string;
  time: number;
}

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss']
})
export class CreateTaskDialogComponent {

  taskModelObj: TaskModel = new TaskModel();

  constructor(
    public dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private taskapi: ApiService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  taskForm = new FormGroup({
    task: new FormControl('',
      Validators.required),
    list: new FormControl('',
      Validators.required),
    priority: new FormControl('',
      Validators.required),
    time: new FormControl('',
      Validators.required)
  })

  // convenience getter for easy access to form fields
  get taskform() { return this.taskForm.controls; }

  createTask() {
    this.taskModelObj.task = this.taskform.task.value;
    this.taskModelObj.list = this.taskform.list.value;
    this.taskModelObj.priority = this.taskform.priority.value;
    this.taskModelObj.date = this.taskform.time.value;

    this.taskapi.postTask(this.taskModelObj).
      subscribe(res => {
        console.log(res);
        console.log("Task added successfully")
      },
        err =>
          console.log("Something went wrong" + err))
  }


}
