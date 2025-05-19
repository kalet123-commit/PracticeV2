import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatToolbar,MatToolbarRow],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /** Application title */
  title = 'practicatres';
  /** Navigation menu items */
  options =[
    {path: '/home', title: 'Home'},
    {path: 'nursing/mental-state-exams', title: 'Cards'}
  ]
  /**
   * Creates an instance of AppComponent.
   * Initializes the translation service with English and Spanish languages.
   *
   * @param translate - The translation service for handling internationalization
   */
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}







