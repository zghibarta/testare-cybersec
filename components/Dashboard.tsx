
import React, { useState } from 'react';
import { CandidateResult } from '../types';

interface DashboardProps {
  results: CandidateResult[];
  onBack: () => void;
  onDelete: (id: string) => void;
  onViewDetails: (result: CandidateResult) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ results, onBack, onDelete, onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResults = results.filter(r => 
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl w-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
      <div className="p-6 border-b border-slate-200 bg-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Dashboard administrativ</h1>
          <p className="text-slate-500 text-sm">Gestionarea și vizualizarea performanței candidaților</p>
        </div>
        <div className="flex space-x-3">
          <input 
            type="text"
            placeholder="Caută după nume..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button 
            onClick={onBack}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-lg text-sm transition-all"
          >
            Ieșire
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider">
              <th className="px-6 py-4">Candidat</th>
              <th className="px-6 py-4">Data Testului</th>
              <th className="px-6 py-4 text-center">Scor</th>
              <th className="px-6 py-4 text-center">Procentaj</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Acțiuni</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredResults.length > 0 ? (
              filteredResults.map((res) => {
                const percentage = Math.round((res.score / res.totalQuestions) * 100);
                const isPassed = percentage >= 70;
                
                return (
                  <tr 
                    key={res.id} 
                    onClick={() => onViewDetails(res)}
                    className="hover:bg-blue-50 transition-colors group cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800">{res.name}</div>
                      <div className="text-xs text-slate-400 font-mono">{res.id}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{res.date}</td>
                    <td className="px-6 py-4 text-center font-bold text-slate-700">{res.score} / {res.totalQuestions}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${isPassed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {percentage}%
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {isPassed ? (
                        <span className="flex items-center text-green-600 text-sm font-semibold">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Recomandat
                        </span>
                      ) : (
                        <span className="flex items-center text-slate-400 text-sm font-semibold">
                          <span className="w-2 h-2 bg-slate-300 rounded-full mr-2"></span>
                          Sub Prag
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                      <button 
                        onClick={() => onDelete(res.id)}
                        className="text-slate-300 hover:text-red-500 transition-colors p-2"
                        title="Șterge Rezultat"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-20 text-center text-slate-400 italic">
                  Nu s-au găsit rezultate. Începeți un test nou pentru a vedea date aici.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {results.length > 0 && (
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <span className="text-xs font-bold text-slate-400 uppercase mr-4">Statistici sumare:</span>
          <span className="text-sm font-bold text-slate-700">Total candidați: {results.length}</span>
          <span className="mx-3 text-slate-300">|</span>
          <span className="text-sm font-bold text-slate-700">
            Media scorului: {Math.round(results.reduce((acc, r) => acc + (r.score/r.totalQuestions)*100, 0) / (results.length || 1))}%
          </span>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
