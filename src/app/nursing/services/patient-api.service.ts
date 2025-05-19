import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service"
import {Patient} from '../model/patient';
import {environment} from '../../../environments/environment'

const  patientsResourceEndpointPath =environment.patientsEndpointPath

@Injectable({
  providedIn: 'root'
})
export class PatientApiService extends  BaseService<Patient>{

  constructor() {
    super();
    this.resourceEndpoint = patientsResourceEndpointPath;
  }
}
