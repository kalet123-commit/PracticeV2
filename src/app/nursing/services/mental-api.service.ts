import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { MentalStateExam } from '../model/mental-state-exam';
import { Examiner } from '../model/examiner';
import { Patient } from '../model/patient';
import { environment } from '../../../environments/environment';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

const mentalStateExamEndpointPath = environment.mentalStateExamsEndpointPath;
const examinerEndpointPath = environment.examinersEndpointPath;
const patientEndpointPath = environment.patientsEndpointPath;

interface ExamData {
  exam: MentalStateExam;
  examiner: Examiner;
  patient: Patient;
}

@Injectable({
  providedIn: 'root'
})
export class MentalStateExamApiService extends BaseService<MentalStateExam> {
  constructor() {
    super();
    this.resourceEndpoint = mentalStateExamEndpointPath;
  }

  getAllWithRelations(): Observable<ExamData[]> {
    return this.getAll().pipe(
      switchMap(exams => {
        const examDataObservables = exams.map(exam => {
          const examiner$ = this.http.get<Examiner>(`${environment.serverBaseUrl}${examinerEndpointPath}/${exam.examiner}`);
          const patient$ = this.http.get<Patient>(`${environment.serverBaseUrl}${patientEndpointPath}/${exam.patientId}`);

          return forkJoin([examiner$, patient$]).pipe(
            map(([examiner, patient]) => ({
              exam,
              examiner,
              patient
            }))
          );
        });
        return forkJoin(examDataObservables);
      })
    );
  }
}


