import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordMatch(FormObj:AbstractControl):null|ValidationErrors
{
    let password = FormObj.value.password
    let rePassword = FormObj.value.rePassword
     if (password===rePassword) {
        return null
     }else{
        return {passwordMissMatch:true}
     }
}