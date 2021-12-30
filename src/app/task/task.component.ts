import { Component } from '@angular/core';
import { Task } from '../interface/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  public tasks: Task[] = [
    {
      subject: "TEST",
      isDone: true
    },
    {
      subject: "TEST2",
      isDone: false
    }
  ];

  public isEditing: boolean = false;

  constructor() {
  }

}