import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { emptyContent } from 'src/app/validators/emptyInput';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide:boolean = true;
  loginForm:FormGroup
  submited:boolean=false
  loginLoading:boolean=false
  loginError:string
  constructor(private fb:FormBuilder,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.loginFormMethod()
  }

  loginFormMethod() {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,emptyContent]],
      password:['',[Validators.required,emptyContent]],
    })
  }
  login(value) {
    this.submited=true
    if(this.loginForm.valid) {
      this.loginLoading=true
      console.log(value)
      this.authService.login(value).subscribe(
        res => {
          console.log(res)
          this.loginLoading=false
          this.loginError=''
        } , err =>  {
          console.log(err)
          this.loginLoading=false
          if(err?.error?.message=='401') {
            this.loginError='Email Or Password Wrong'
          }
        }
      )
    }
  }
}
