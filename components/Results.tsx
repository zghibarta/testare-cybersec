
import React, { useState } from 'react';
import { CandidateResult } from '../types';

interface ResultsProps {
  result: CandidateResult;
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ result, onRestart }) => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const percentage = Math.round((result.score / result.totalQuestions) * 100);
  const isPassed = percentage >= 70;

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full p-8 md:p-12 text-center animate-fadeIn overflow-y-auto max-h-[92vh]">
      <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6 shadow-inner
        ${isPassed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
        {isPassed ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>

      <h1 className="text-3xl font-black text-slate-900 mb-1 tracking-tight">Evaluare Completă</h1>
      <p className="text-slate-500 mb-8 font-medium">Candidat identificat: <span className="text-slate-900">{result.name}</span></p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Răspunsuri Corecte</div>
          <div className="text-3xl font-black text-slate-800">{result.score} <span className="text-slate-300 text-xl">/ {result.totalQuestions}</span></div>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Punctaj Procentual</div>
          <div className="text-3xl font-black text-slate-800">{percentage}%</div>
        </div>
      </div>

      <div className="text-left mb-10 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
        <h3 className="font-bold text-slate-800 mb-5 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          Performanță pe Competențe
        </h3>
        <div className="space-y-4">
          {(Object.entries(result.categoryPerformance) as [string, number][]).map(([cat, score]) => (
            <div key={cat} className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold uppercase tracking-tight">
                <span className="text-slate-500">{cat}</span>
                <span className={score >= 3 ? 'text-green-600' : 'text-slate-700'}>{score} / 4</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${score >= 3 ? 'bg-green-500' : score >= 2 ? 'bg-amber-500' : 'bg-red-500'}`}
                  style={{ width: `${(score / 4) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {!showAnalysis ? (
          <button 
            onClick={() => setShowAnalysis(true)}
            className="w-full py-4 px-6 bg-blue-50 text-blue-700 rounded-xl font-bold hover:bg-blue-100 transition-all flex items-center justify-center group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Analizează Răspunsurile Mele
          </button>
        ) : (
          <div className="text-left space-y-4 pt-6 border-t border-slate-100 animate-fadeIn">
            <h3 className="font-black text-slate-800 text-lg mb-4 uppercase tracking-tight">Feedback Corectiv</h3>
            {result.questions.map((q, idx) => {
              const userSelected = result.responses[idx];
              const isCorrect = userSelected === q.correctAnswerIndex;

              return (
                <div key={q.id} className={`p-5 rounded-2xl border-2 transition-colors ${isCorrect ? 'border-green-50 bg-green-50/20' : 'border-red-50 bg-red-50/20'}`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="font-bold text-slate-800 text-sm leading-snug">
                      <span className="text-slate-300 mr-2 font-mono">#{idx + 1}</span>
                      {q.text}
                    </p>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter shrink-0 ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {isCorrect ? 'Corect' : 'Eronat'}
                    </span>
                  </div>
                  
                  <div className="mt-3 space-y-2">
                    <div className={`p-3 rounded-xl text-xs flex items-center ${isCorrect ? 'bg-green-100/50 text-green-800' : 'bg-red-100/50 text-red-800'}`}>
                      <span className="font-bold mr-2">Alegerea ta:</span>
                      {userSelected === -1 ? 'Timp expirat' : q.options[userSelected]}
                    </div>
                    
                    {!isCorrect && (
                      <div className="p-3 rounded-xl bg-blue-50 text-blue-800 text-xs shadow-sm ring-1 ring-blue-100">
                        <span className="font-bold mr-2 text-blue-900 italic">Corect:</span>
                        {q.options[q.correctAnswerIndex]}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <button 
          onClick={onRestart}
          className="w-full bg-slate-900 hover:bg-black text-white font-black py-4 px-6 rounded-2xl shadow-xl transition-all transform active:scale-95 mt-6"
        >
          ÎNCHEIE SESIUNEA
        </button>
      </div>
      
      <p className="mt-10 text-slate-300 text-[10px] font-bold uppercase tracking-[0.2em] select-none">
        Protocol de securitate activat
      </p>
    </div>
  );
};

export default Results;
