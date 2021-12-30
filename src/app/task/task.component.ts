import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { LocalStorageService } from '../helper/local-storage';
import { Task } from '../interface/task'
import { TodoService } from '../service/todo-service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public form!: FormGroup;
  public tasks: Task[] = [];
  public isEditing: boolean = false;

  public userId: string = "0";

  constructor(private fb: FormBuilder, public todoService: TodoService, public router: Router) {
    this.form = fb.group({
      subject: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      isDone: [],
      indexEdinting: [], // Use this property just to know the index of the task in the list and update the text inline without reload all the data.
      id: []
    });

    this.userId = LocalStorageService.getUserId();

  }

  ngOnInit(): void {
    this.todoService.getAll(this.userId)
      .subscribe(response => this.tasks = response.taskInfo)
  }

  public addTask() {

    if (!this.isEditing) {

      const data = {
        subject: this.form.get('subject')?.value,
        isDone: false,
        userId: this.userId
      }

      this.todoService.create(data).subscribe(response => {
        this.tasks = [...this.tasks, response];
      });

    } else {

      const indexEdinting = this.form.get('indexEdinting')?.value;
      const subject = this.form.get('subject')?.value;
      const isDone = this.form.get('isDone')?.value;
      const id = this.form.get('id')?.value;

      this.todoService.update(this.form.value).subscribe(response => {
        if (response.status) {
          this.tasks.splice(indexEdinting, 1, {
            id,
            subject,
            isDone
          });
        }
      });

    }

    this.clearActions();
  }

  public deleteTask(index: number, taskId: string | undefined) {

    if (taskId) {
      this.todoService.delete(taskId).subscribe(response => {
        response.status && this.tasks.splice(index, 1);
      })

    }
  }

  public editTask(task: Task, index: number) {
    this.isEditing = true;
    this.form.patchValue(task);
    this.form.get('indexEdinting')?.setValue(index);
  }

  public clearActions() {
    this.isEditing = false;
    this.form.get('subject')?.patchValue('');
    this.form.get('subject')?.updateValueAndValidity();
    this.form.markAsUntouched();
  }

  public markAsCheckOrUnchecked({ checked }: MatCheckboxChange, task: Task, index: number) {
    const data: Task = {
      id: task.id,
      subject: task.subject,
      isDone: checked
    }

    this.todoService.update(data).subscribe(response => {
      if (response.status) {
        this.tasks.splice(index, 1, data);
      }
    });

  }

  public logout() {
    LocalStorageService.logout();
    this.router.navigate(['login'])
  }

}