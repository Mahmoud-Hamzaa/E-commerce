import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  constructor(private authService: AuthService, private router: Router) { }
  isLoading = false
  responseErrorMsg!: string

  forgetPaasswordFormObj: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email])
  })

  handleForgetPassword() {
    if (this.forgetPaasswordFormObj.valid) {
      this.isLoading = true
      this.authService.forgetPassword(this.forgetPaasswordFormObj.value).subscribe({
        next: (value) => {
          this.router.navigate(["/verify-code"])
        },
        error: (err) => {
          this.isLoading = false
          this.responseErrorMsg = err.error.message
        },
      })
    }
  }
}
