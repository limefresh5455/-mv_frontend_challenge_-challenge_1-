import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentAmount = 100;
  public data: any  = [];
  data1: any = [];
  public userFormValues: any;
  public formValue: any = [];
  public amount: any;
  public FormItem: any;
  public newTaskForm: FormGroup;
  groups = [
    {
      "name": "john",
      "amount": "100",
      "select": "Debit",
    },
    {
      "name": "mark",
      "amount": "200",
      "select": "Credit",
    },
  ];
  constructor(fb: FormBuilder) {
    this.newTaskForm = fb.group({
      name: ["", Validators.required],
      amount: ["", Validators.required],
      select: ["", Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.newTaskForm.value.select == "Debit") {
      this.currentAmount = Number(this.currentAmount) - Number(this.newTaskForm.value.amount);
    } else {
      this.currentAmount = Number(this.currentAmount) + Number(this.newTaskForm.value.amount);
    }
    this.data.push(this.newTaskForm.value);
    sessionStorage.setItem('userDetails',  this.data);
    this.data1.push(sessionStorage.getItem('userDetails'));
    this.newTaskForm.reset();
  }

}
