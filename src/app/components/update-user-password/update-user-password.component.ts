import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from '../../custom_validator/password-match';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-user-password',
  templateUrl: './update-user-password.component.html',
  styleUrl: './update-user-password.component.css'
})
export class UpdateUserPasswordComponent {
  
  isPassChangeSucessfully = false
  isLoading = false
  successMSg!:string
  errorMsg!:string
  authService = inject(AuthService)
  
   updatePassFormObj:FormGroup = new FormGroup({
    currentPassword:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required ,Validators.pattern(/^[A-z][a-z][0-9]{3,}$/)]),
    rePassword:new FormControl("",[Validators.required])

  },{validators:passwordMatch})




  handlepasswordUpdating()
  {
    this.isLoading = true
    if (this.updatePassFormObj.valid) {
      console.log(this.updatePassFormObj.value);
      
       this.authService.updateUserPassword(this.updatePassFormObj.value).subscribe({
        next:(response)=>{
          this.isLoading = false
          console.log(response);
          this.successMSg = response.message
          
        },
        error:(err)=> {
          this.isLoading = false
          this.errorMsg= err.message
        },
       })
    }
  }
}
