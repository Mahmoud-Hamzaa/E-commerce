import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { RouterOutlet } from "@angular/router";

@Component({
  standalone:true,
  imports: [RouterOutlet],
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent implements OnInit , OnDestroy {
  constructor(private authService:AuthService){}

userNameSubjectSubscription!:Subscription
 userName!:string|null
  ngOnInit(): void {
   this.userNameSubjectSubscription=this.authService.userNameSubject.subscribe({
    next:(value)=>{
      this.userName = value
    }
   })
  }
 


    ngOnDestroy(): void {
    this.userNameSubjectSubscription.unsubscribe()
  }


}
