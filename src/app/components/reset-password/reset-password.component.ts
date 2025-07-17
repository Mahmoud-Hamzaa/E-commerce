import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnDestroy {
  constructor( private authService:AuthService , private router:Router){}
 
  resetPasswordSubscription!:Subscription
  responseErrorMsg!:string
  isLoading = false

  resetPasswordFormObj : FormGroup = new FormGroup({
    email: new FormControl("" , [Validators.required , Validators.email] ),
    newPassword: new FormControl("" , [Validators.required ,Validators.pattern(/^[A-z][a-z][0-9]{3,}$/)])
  })

  handleResetPassword()
  {
    this.isLoading = true
    this.resetPasswordSubscription = this.authService.resetPassword(this.resetPasswordFormObj.value).subscribe({
      next:(value)=> {
        this.router.navigate(['/login'])
      },
      error:(err)=> {
        this.isLoading = false
        this.responseErrorMsg = err.error.message
      }
    })
  }



   ngOnDestroy(): void {
    this.resetPasswordSubscription.unsubscribe()
  }
}
