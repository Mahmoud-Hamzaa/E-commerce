import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone:true,
  imports:[ReactiveFormsModule],
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.css'
})
export class VerifyCodeComponent {
  constructor(private authServices : AuthService , private router:Router){}

  responseErrorMsg!:string
  isLoading=false

  verificationFormObj : FormGroup = new FormGroup({
    resetCode :new FormControl("" , [Validators.required])
  })

  handleVerfication()
  {
    if(this.verificationFormObj.valid)
    {
      this.isLoading=true
      this.authServices.verifyResetCode(this.verificationFormObj.value).subscribe({
      next:(value)=>{
        this.router.navigate(["/reset-password"])
      console.log(value);
        
      },
      error:(err)=> {
        this.isLoading = false
        console.log(err);
        this.responseErrorMsg = err.error.message 
      }
    })
    }
  }

}
