import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone:true,
  imports:[ReactiveFormsModule],
  selector: 'app-update-user-info',
  templateUrl: './update-user-info.component.html',
  styleUrl: './update-user-info.component.css'
})
export class UpdateUserInfoComponent {
authService = inject(AuthService)
isLoading:boolean = false
@ViewChild("successMsg") successElement!:ElementRef
successMsg!:string
errorMsg!:string
  UpdateUserInfoFormObj:FormGroup = new FormGroup({
    name:new FormControl("" , [Validators.required]),
    email:new FormControl("" , [Validators.required , Validators.email]),
    phone:new FormControl("" , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/gm)])
    
  })


  handleAlertMsg()
{
  setTimeout(() => {
   this.successElement.nativeElement.classList.remove("done")
}, 2000);

}

  handleUpdateUserInfo()
  {
    this.isLoading = true
    this.authService.UpdateUserInfo(this.UpdateUserInfoFormObj.value).subscribe({
      next:(response)=>{
        this.successElement.nativeElement.classList.add("done")
        this.isLoading = false
        this.authService.userNameSubject.next(response.user.name)
        this.handleAlertMsg()
        
      },
      error:(err)=>{
        this.isLoading = false
        console.log(err);
        
      }
    })
  }



}
