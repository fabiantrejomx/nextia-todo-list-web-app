import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../helper/local-storage';
import { TodoService } from '../service/todo-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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

  public login() {
    this.todoService.login(this.form.get('email')?.value, this.form.get('password')?.value)
      .subscribe(response => {
        LocalStorageService.saveTokenAndUserId(response.token, response.userId);
        this.router.navigate(['tasks']);
      })
  }

}
