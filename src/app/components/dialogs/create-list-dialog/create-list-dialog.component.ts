import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListApiService } from 'src/app/service/list/list-api.service';
import { ListModel } from 'src/app/shared/model/task.model';

export interface DialogData {
  list: string;
}

@Component({
  selector: 'app-create-list-dialog',
  templateUrl: './create-list-dialog.component.html',
  styleUrls: ['./create-list-dialog.component.scss']
})
export class CreateListDialogComponent implements OnInit {

  listModelObj: ListModel = new ListModel();

  constructor(
    public dialogRef: MatDialogRef<CreateListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private listApi: ListApiService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  listForm = new FormGroup({
    list: new FormControl('',
      Validators.required)
  })

  createList() {
    this.listModelObj.list = this.listform.list.value;
    this.listApi.postList(this.listModelObj).
      subscribe(res => {
        console.log(res);
        console.log("List added successfully")
      },
        err =>
          console.log("Something went wrong" + err))
  }

  // convenience getter for easy access to form fields
  get listform() { return this.listForm.controls; }
  ngOnInit(): void {
  }


}
