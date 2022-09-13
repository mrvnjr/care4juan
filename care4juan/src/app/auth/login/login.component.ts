import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login$: Subscription = new Subscription();
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  login(){
    let email: string = this.loginForm.value.email;
    let password: string = this.loginForm.value.password;

    this.login$.add(
      this.loginService.login(email, password).subscribe(
        result=>{
          console.log(result)
        },
        error=>{
          console.log("error",error)
        }
      )
    )



    // this.login$.add(
    //   this.loginService.test().subscribe(
    //     result=>{
    //       console.log(result)
    //     }
    //   )
    // )

  }

}
