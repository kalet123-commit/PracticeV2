import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service"
import {Examiner} from '../model/examiner';
import {environment} from '../../../environments/environment'

const  examinersResourceEndpointPath =environment.examinerEndpointPath
@Injectable({
  providedIn: 'root'
})
export class ExaminerApiService extends BaseService<Examiner>{

  constructor() {
    super();
    this.resourceEndpoint = examinersResourceEndpointPath;
  }
}

