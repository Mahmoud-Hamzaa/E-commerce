import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../interfaces/register';
import { Login } from '../interfaces/login';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ResetPasswordInterface } from '../interfaces/reset-password-interface';
import { ForgetPasswordInterface } from '../interfaces/forget-password-interface';
import { ResetCodeInterface } from '../interfaces/reset-code-interface';
import { DecodedToken } from '../interfaces/decoded-token';
import { jwtDecode } from 'jwt-decode';
import { UpdateUserInfo } from '../interfaces/update-user-info';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private httpClient:HttpClient , private router:Router) { }
  
  userNameSubject= new BehaviorSubject<string | null>(this.getUserName())

  isLoggedIn=new BehaviorSubject<boolean>(localStorage.getItem("applicationtoken")?true:false)
  
  signUp(registerationObj:Register):Observable<any>
  {
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",registerationObj)
  }

  login(login:Login):Observable<any>
  {
   return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin" ,login )
    
  
  }
  logout()
  {
    this.isLoggedIn.next(false)
    // ? remove token from local storage

    localStorage.removeItem("applicationtoken");
     // ? navigate to logIn page
    this.router.navigate(["/login"]);

    // ? notify userName subject with null
    this.userNameSubject.next(null)
  }
  forgetPassword(forgetPasswordFormObj:ForgetPasswordInterface):Observable<any>
  {
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords" ,forgetPasswordFormObj )
  }
  verifyResetCode(resetCode:ResetCodeInterface):Observable<any>
  {
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode" , resetCode)
  }

  resetPassword(resetPassFormObg:ResetPasswordInterface):Observable<any>
  {
    return this.httpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword" , resetPassFormObg)
  }

  updateUserPassword(updatePassForm:any):Observable<any>
  {
    return this.httpClient.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",updatePassForm)
  }

  UpdateUserInfo(updateUserInfoForm:UpdateUserInfo):Observable<any>
  {
    
    
    return this.httpClient.put("https://ecommerce.routemisr.com/api/v1/users/updateMe",updateUserInfoForm)
  }

  getUserName():string | null
  {
     let token = localStorage.getItem("applicationtoken")
      
      if (token) {
        
       let decodedToken = jwtDecode<DecodedToken>(token)
    
       return decodedToken.name
      }
      return null
  }
}
