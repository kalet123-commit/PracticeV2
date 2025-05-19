import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service"
import {MentalStateExam} from '../model/mental-state-exam';
import {environment} from '../../../environments/environment'

const  mentalsResourceEndpointPath =environment.mentalStateExamsEndpointPath

@Injectable({
  providedIn: 'root'
})
export class MentalApiService extends  BaseService<MentalStateExam>{

  constructor() {
    super();
    this.resourceEndpoint = mentalsResourceEndpointPath;
  }
}



