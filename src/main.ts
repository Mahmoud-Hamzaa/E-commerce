
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/interceptors/auth.interceptor';
import { spinnerInterceptor } from './app/interceptors/spinner.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent , {
  providers:[
    provideRouter(routes , withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor , spinnerInterceptor])),
    provideAnimations()
  ]
})