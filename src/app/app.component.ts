
import { Component, inject } from '@angular/core';
import { NgxSpinnerService,  NgxSpinnerModule } from "ngx-spinner";
import { NavbarComponent } from "./components/navbar/navbar.component";
import {  RouterOutlet } from "@angular/router";

@Component({
  standalone:true,
  imports: [NavbarComponent, RouterOutlet, NgxSpinnerModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-commerce#stand';
  spinner = inject(NgxSpinnerService)

  ngOnInit()
  {
     this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
}

