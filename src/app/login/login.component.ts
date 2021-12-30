import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../service/todo-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public form!: FormGroup;

  public hidePassword = true;


  constructor(private fb: FormBuilder, public todoService: TodoService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  public login() {
    this.todoService.login(this.form.get('email')?.value, this.form.get('password')?.value)
      .subscribe(response => console.log(response))
  }

}
