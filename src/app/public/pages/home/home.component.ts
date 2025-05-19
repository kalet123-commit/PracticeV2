import { Component } from '@angular/core';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [
    ToolbarComponent,
    TranslatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
