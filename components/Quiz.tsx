
import React, { useState, useEffect, useMemo } from 'react';
import { Question } from '../types';
import { shuffleArray } from '../utils/quizHelpers';

interface QuizProps {
  questions: Question[];
  onFinish: (answers: number[]) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [timeLeft, setTimeLeft] = useState(60);

  const currentQuestion = questions[currentIndex];

  // Opțiuni amestecate pentru a nu fi mereu în aceeași ordine
  const shuffledOptions = useMemo(() => {
    const optsWithIndex = currentQuestion.options.map((text, index) => ({ text, index }));
    return shuffleArray(optsWithIndex);
  }, [currentQuestion.id]);

  // Logica de Timer - se declanșează la fiecare schimbare de index sau secundă
  useEffect(() => {
    if (timeLeft <= 0) {
      handleNext();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, currentIndex]);

  // RESETARE timer când trecem la următoarea întrebare
  useEffect(() => {
    setTimeLeft(60);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onFinish(answers);
    }
  };

  const selectAnswer = (originalIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = originalIndex;
    setAnswers(newAnswers);
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-fadeIn">
      {/* Progress */}
      <div className="w-full h-2.5 bg-slate-100">
        <div 
          className="h-full bg-blue-600 transition-all duration-700 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-10">
        <div className="flex justify-between items-center mb-8">
          <div className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
            {currentQuestion.category}
          </div>
          <div className={`flex items-center space-x-2 font-mono text-lg font-black transition-colors ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-slate-700'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{timeLeft}s</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mb-10 leading-tight">
          <span className="text-blue-600/40 font-mono mr-3 text-3xl">{(currentIndex + 1).toString().padStart(2, '0')}</span>
          {currentQuestion.text}
        </h2>

        <div className="grid gap-4 mb-10">
          {shuffledOptions.map((opt, i) => (
            <button
              key={`${currentQuestion.id}-opt-${i}`}
              onClick={() => selectAnswer(opt.index)}
              className={`p-5 text-left rounded-xl border-2 transition-all duration-200 flex items-start space-x-4
                ${answers[currentIndex] === opt.index 
                  ? 'border-blue-600 bg-blue-50/50 ring-4 ring-blue-50 shadow-md' 
                  : 'border-slate-100 hover:border-slate-300 bg-slate-50 hover:bg-white'}`}
            >
              <div className={`mt-0.5 w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all
                ${answers[currentIndex] === opt.index ? 'border-blue-600 bg-blue-600 shadow-inner' : 'border-slate-300'}`}>
                {answers[currentIndex] === opt.index && <div className="w-2 h-2 bg-white rounded-full shadow-sm" />}
              </div>
              <span className={`font-semibold text-lg ${answers[currentIndex] === opt.index ? 'text-blue-900' : 'text-slate-700'}`}>
                {opt.text}
              </span>
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-slate-100">
          <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">
            Etapa {currentIndex + 1} / {questions.length}
          </span>
          <button
            onClick={handleNext}
            className="px-10 py-4 bg-slate-900 hover:bg-black text-white rounded-xl font-black transition-all shadow-xl active:scale-95 disabled:opacity-50"
          >
            {currentIndex === questions.length - 1 ? 'FINALIZARE TEST' : 'ÎNTREBAREA URMĂTOARE'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
