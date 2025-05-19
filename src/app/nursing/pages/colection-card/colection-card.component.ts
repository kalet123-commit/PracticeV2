import { Component } from '@angular/core';
import {ToolbarComponent} from '../../../public/components/toolbar/toolbar.component';
import {ColectionListComponent} from '../../components/colection-list/colection-list.component';

/**
 * Page component for cards
 * @class NursingComponent
 * @description
 * This component serves as the container page for the card functionality.
 * It includes the toolbar for navigation and the list colection form component
 * to allow users to view the colection for the patients they want to know.
 */

@Component({
  selector: 'app-colection-card',
  imports: [
    ToolbarComponent,
    ColectionListComponent
  ],
  templateUrl: './colection-card.component.html',
  styleUrl: './colection-card.component.css'
})
export class ColectionCardComponent {

}
