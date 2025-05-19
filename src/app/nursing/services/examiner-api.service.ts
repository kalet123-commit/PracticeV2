import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service"
import {Examiner} from '../model/examiner';
import {environment} from '../../../environments/environment'
/**
 * API endpoint path for courses obtained from environment configuration.
 */
const  examinersResourceEndpointPath =environment.examinersEndpointPath
@Injectable({
  providedIn: 'root'
})

/**
 * Service responsible for managing course-related HTTP operations.
 * Extends BaseService to provide CRUD operations for Course entities.
 *
 * Available operations inherited from BaseService:
 * - GET    /api/Examiner     - Retrieve all Examiner
 * - GET    /api/Examiner/:id - Retrieve a specific Examiner
 * - POST   /api/Examiner     - Create a new Examiner
 * - PUT    /api/Examiner/:id - Update an existing Examiner
 * - DELETE /api/Examiner/:id - Delete an Examiner
 *
 * @example
 * ```typescript
 * constructor(private ExaminerService: ExaminerService) {}
 *
 * // Get all Examiners
 * ExaminerService.getAll().subscribe(Examiner => {...});
 * ```
 */

export class ExaminerApiService extends BaseService<Examiner>{

  constructor() {
    super();
    this.resourceEndpoint = examinersResourceEndpointPath;
  }
}

/**
 * Initializes the ExaminerService.
 * Sets up the base URL endpoint for all Examiner-related HTTP requests.
 */
