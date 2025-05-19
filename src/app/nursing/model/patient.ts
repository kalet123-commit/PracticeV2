export class Patient {
  /** Unique identifier for the Examiner */
  id: number;

  /** fitstname of the examiner */
  firstName: string;

  /** laststname of the examiner */
  lastName: string;

  /** Url of the photo of the patient */
  photoUrl: string;

  /** Date of birthday */

  birthday: string;

  /**
   * Creates a new Patient instance
   * @param patient - Initial patient properties
   */



  constructor(patient: {id?: number, firstName?: string, lastName?: string, photoUrl?: string,birthday?:string}) {
    this.id = patient.id || 0;
    this.firstName = patient.firstName || '';
    this.lastName = patient.lastName || '';
    this.photoUrl = patient.photoUrl || '';
    this.birthday = patient.birthday || '';

  }
}
