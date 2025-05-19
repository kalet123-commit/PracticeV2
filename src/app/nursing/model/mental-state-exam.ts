export class MentalStateExam {
  /** Unique identifier for the exam */
  id: number;

  /** Unique identifier for the patient */
  patientId: number;

  /** Unique identifier for the examiner */
  examiner: number;

  /** Date fot the exam */
  examDate: string;

  /** score fot the orientation */
  orientationScore: number;


  /** score fot the registration */
  registrationScore: number;

  /** score fot the attention and calculation  */
  attentionAndCalculationScore: number;

  /** score fot the recall */
  recallScore: number;

  /** score fot the language */
  languageScore: number;

  /**
   * Creates a new MentalStateExam instance
   * @param mentalStateExam - Initial mentalStateExam properties
   */



  constructor(mentalStateExam: {id?: number, patientId?: number,examiner?: number,examDate?: string,orientationScore?: number,registrationScore?: number,attentionAndCalculationScore?: number,recallScore?: number,languageScore?: number}) {
    this.id = mentalStateExam.id || 0;
    this.patientId = mentalStateExam.patientId || 0;
    this.examiner = mentalStateExam.examiner || 0;
    this.examDate = mentalStateExam.examDate || '';
    this.orientationScore = mentalStateExam.orientationScore || 0;
    this.registrationScore = mentalStateExam.registrationScore || 0;
    this.attentionAndCalculationScore = mentalStateExam.attentionAndCalculationScore || 0;
    this.recallScore = mentalStateExam.recallScore || 0;
    this.languageScore = mentalStateExam.languageScore || 0;

  }
}

