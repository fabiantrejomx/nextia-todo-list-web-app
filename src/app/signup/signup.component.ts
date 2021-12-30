import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../helper/local-storage';
import { TodoService } from '../service/todo-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public form!: FormGroup;
  public hidePassword = true;

  constructor(private fb: FormBuilder, public todoService: TodoService,
    public router: Router) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })

    
    if(LocalStorageService.getToken()){
        this.router.navigate([`/tasks`]);
    }
  }

  public signup() {
    this.todoService.signup(this.form.get('email')?.value, this.form.get('password')?.value)
      .subscribe(() => {
        this.router.navigate(['login']);
      })
  }

  public navigateToLogin() {
    this.router.navigate(['login']);
  }

}
