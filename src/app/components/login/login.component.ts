import { AuthService } from './../../services/auth.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';


@Component({
  standalone:true,
  imports:[ReactiveFormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy  {
  constructor(private authService: AuthService, private router: Router , private cartService:CartService) { }
 isSubmited :boolean= false
  responseErrorMsg = ""
  isLoading = false
  loginSubscription!: Subscription

  loginFormObj: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  })





 isDirtyForm():boolean{
  if (this.loginFormObj.dirty) {
    return true
  }
  return false
 }
 
  handleLogin() {
    if (this.loginFormObj.valid) {
        this.isLoading = true
        this.loginSubscription = this.authService.login(this.loginFormObj.value).subscribe({
        next: (response) => {
          localStorage.setItem("applicationtoken", response.token)
          this.authService.userNameSubject.next(response.user.name)
          this.cartService.getUpdatedCartItemsNumbers()
          
          this.isSubmited=true
          this.authService.isLoggedIn.next(true)
          this.router.navigate(["/home"])

        },
        error: (err) => {
          this.isLoading = false
          console.log(err)
          this.responseErrorMsg = err.error.message

        }
      })
    }

  }



  ngOnDestroy(): void {
    if (this.loginSubscription != undefined) {
      this.loginSubscription.unsubscribe()
    }
  }

}
