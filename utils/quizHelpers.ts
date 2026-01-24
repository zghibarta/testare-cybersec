
import { Question, SecureQuestion, Category } from '../types';
import { allQuestions } from '../data/questions';

export const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

/**
 * Generează un set nou de întrebări DE-SECURIZATE pentru UI.
 * Un candidat nu poate vedea răspunsul corect în obiectul întrebării.
 */
export const generateQuizSet = (): SecureQuestion[] => {
  const categories = Object.values(Category);
  let selected: SecureQuestion[] = [];

  categories.forEach(cat => {
    const pool = allQuestions.filter(q => q.category === cat);
    const shuffled = shuffleArray(pool);
    selected = [...selected, ...shuffled.slice(0, 4)];
  });

  return shuffleArray(selected);
};

export const stripAnswers = (questions: SecureQuestion[]): Question[] => {
  return questions.map(({ correctAnswerIndex, ...rest }) => rest);
};
