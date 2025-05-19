import { Component, OnInit } from '@angular/core';
import { ColectionItemComponent } from '../colection-item/colection-item.component';
import { MentalStateExam } from '../../model/mental-state-exam';
import { Examiner } from '../../model/examiner';
import { Patient } from '../../model/patient';
import { MentalStateExamApiService  } from '../../services/mental-api.service';

interface ExamData {
  exam: MentalStateExam;
  examiner: Examiner;
  patient: Patient;
}

@Component({
  selector: 'app-colection-list',
  standalone: true,
  imports: [
    ColectionItemComponent
  ],
  templateUrl: './colection-list.component.html',
  styleUrl: './colection-list.component.css'
})
export class ColectionListComponent implements OnInit {
  registeredCard: ExamData[] = [];

  constructor(private mentalStateExamApi: MentalStateExamApiService) {}

  ngOnInit(): void {
    this.mentalStateExamApi.getAllWithRelations().subscribe({
      next: (data: ExamData[]) => {
        this.registeredCard = data;
      },
      error: (error: any) => {
        console.error('Error fetching exam data', error);
      }
    });
  }
}


