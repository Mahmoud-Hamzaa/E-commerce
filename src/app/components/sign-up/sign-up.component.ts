
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { passwordMatch } from '../../custom_validator/password-match';


@Component({
  standalone:true,
  imports:[ReactiveFormsModule],
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnDestroy  {
   constructor(private authService: AuthService, private router: Router) {}

  responseErrorMsg = ""
  isLoading = false
  signUpSubsription!: Subscription
  isSubmited :boolean= false


  signUpFormObj: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.pattern(/^[A-z][a-z][0-9]{3,}$/)]),
    rePassword: new FormControl("", [Validators.required, Validators.pattern(/^[A-z][a-z][0-9]{3,}$/)]),
    phone: new FormControl("", [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, { validators: passwordMatch } )

 isDirtyForm():boolean{
  if (this.signUpFormObj.dirty) {
    return true
  }
  return false
 }


  handleSignUp(): void {
    this.isLoading = true
    if (this.signUpFormObj.valid) {
      this.signUpSubsription = this.authService.signUp(this.signUpFormObj.value).subscribe({
        next: (response) => {
          this.isLoading = false
          this.isSubmited =true
          this.router.navigate(["/login"])

        },
        error: (err) => {
          this.isLoading = false
          this.responseErrorMsg = err.error.message
        }

      })
    }

  }
  ngOnDestroy(): void {
    if (this.signUpSubsription != undefined) {
      this.signUpSubsription.unsubscribe()
    }
  }
}

