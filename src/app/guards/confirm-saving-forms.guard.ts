import { LoginComponent } from '../components/login/login.component';
import { SignUpComponent } from './../components/sign-up/sign-up.component';
import { CanDeactivateFn } from '@angular/router';

export const confirmSavingFormsGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  if (component instanceof SignUpComponent || component instanceof LoginComponent) {
   
     if (component.isDirtyForm() && component.isSubmited) {
      
      return window.confirm("are you sure you want to leave !")
    }
  }
  return true
  
}
