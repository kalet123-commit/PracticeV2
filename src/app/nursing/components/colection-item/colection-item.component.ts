import { Component,Input } from '@angular/core';
import {MentalStateExam} from '../../model/mental-state-exam';
import {Examiner} from '../../model/examiner';
import {Patient} from '../../model/patient';
import {MatCardModule} from '@angular/material/card';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-colection-item',
  standalone: true,
  imports: [MatCardModule, DatePipe],
  templateUrl: './colection-item.component.html',
  styleUrl: './colection-item.component.css'
})
export class ColectionItemComponent {
  @Input() exam!: MentalStateExam;
  @Input() examiner!: Examiner;
  @Input() patient!: Patient;
}
