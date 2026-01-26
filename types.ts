
export enum Category {
  SIEM = 'SIEM',
  XDR = 'XDR',
  VAPT = 'VAPT',
  DFIR = 'DFIR',
  OWASP = 'OWASP'
}

// Interfața pentru UI (fără răspuns corect)
export interface Question {
  id: string;
  category: Category;
  text: string;
  options: string[];
}

// Interfața completă pentru datele interne
export interface SecureQuestion extends Question {
  correctAnswerIndex: number;
}

export interface CandidateResult {
  id: string;
  name: string;
  date: string;
  score: number;
  totalQuestions: number;
  categoryPerformance: Record<Category, number>;
  responses: number[];
  questions: SecureQuestion[];
  timestamp?: Date; // Optional pentru compatibilitate
}

export type View = 'LANDING' | 'QUIZ' | 'RESULTS' | 'ADMIN_AUTH' | 'DASHBOARD' | 'CANDIDATE_DETAILS';
