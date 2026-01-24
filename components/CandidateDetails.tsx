
import React from 'react';
import { CandidateResult } from '../types';

interface CandidateDetailsProps {
  result: CandidateResult;
  onBack: () => void;
}

const CandidateDetails: React.FC<CandidateDetailsProps> = ({ result, onBack }) => {
  return (
    <div className="max-w-4xl w-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn flex flex-col h-[85vh]">
      <div className="p-6 border-b border-slate-200 bg-slate-900 text-white flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">{result.name}</h2>
          <p className="text-slate-400 text-sm">Analiză răspunsuri • {result.date}</p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-xs text-slate-400 font-bold uppercase">Scor</div>
            <div className="text-xl font-black">{result.score} / {result.totalQuestions}</div>
          </div>
          <button 
            onClick={onBack}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-all border border-white/10"
          >
            Înapoi
          </button>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-6 bg-slate-50 space-y-6">
        {result.questions.map((q, idx) => {
          const userSelected = result.responses[idx];
          const isCorrect = userSelected === q.correctAnswerIndex;

          return (
            <div key={idx} className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-4 py-3 bg-slate-100 border-b border-slate-200 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{q.category}</span>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${isCorrect ? 'bg-green-100 text-green-700' : userSelected === -1 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                  {isCorrect ? 'CORECT' : userSelected === -1 ? 'FĂRĂ RĂSPUNS' : 'GREȘIT'}
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-slate-800 font-bold mb-4 leading-relaxed">
                  <span className="text-slate-400 mr-2">{idx + 1}.</span>
                  {q.text}
                </h4>
                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    let style = "border-slate-100 bg-slate-50 text-slate-600";
                    let icon = null;

                    if (optIdx === q.correctAnswerIndex) {
                      style = "border-green-200 bg-green-50 text-green-800 font-semibold ring-1 ring-green-300";
                      icon = <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>;
                    } else if (optIdx === userSelected && !isCorrect) {
                      style = "border-red-200 bg-red-50 text-red-800 font-semibold ring-1 ring-red-300";
                      icon = <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>;
                    }

                    return (
                      <div key={optIdx} className={`p-3 rounded-lg border flex items-center justify-between text-sm ${style}`}>
                        <span>{opt}</span>
                        {icon}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CandidateDetails;
