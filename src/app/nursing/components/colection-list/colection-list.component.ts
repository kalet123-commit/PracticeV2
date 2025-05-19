import { Component,Input } from '@angular/core';
import {ColectionItemComponent} from '../colection-item/colection-item.component';

@Component({
  selector: 'app-colection-list',
  standalone: true,
  imports: [
    ColectionItemComponent
  ],
  templateUrl: './colection-list.component.html',
  styleUrl: './colection-list.component.css'
})
export class ColectionListComponent {
 @Input() exams: ColectionItemComponent[]=[];
  protected readonly ColectionItemComponent = ColectionItemComponent;
}

