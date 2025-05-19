export class Examiner {
  /** Unique identifier for the Examiner */
  id: number;

  /** fitstname of the examiner */
  firstName: string;

  /** laststname of the examiner */
  lastName: string;

  /** Unique identifier of provider */
  nationalProviderIdentifier: number;



  /**
   * Creates a new Examiner instance
   * @param examiner - Initial examiner properties
   */
  constructor(examiner: {id?: number, firstName?: string, lastName?: string, nationalProviderIdentifier?: number,}) {
    this.id = examiner.id || 0;
    this.firstName = examiner.firstName || '';
    this.lastName = examiner.lastName || '';
    this.nationalProviderIdentifier = examiner.nationalProviderIdentifier || 0;

  }
}
