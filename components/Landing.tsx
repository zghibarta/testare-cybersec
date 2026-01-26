
import React, { useState } from 'react';

interface LandingProps {
  onStart: (name: string) => Promise<void>;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      await onStart(name.trim());
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-100 max-w-md w-full animate-fadeIn">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2 text-balance">Evaluare cunoștințe securitate cibernetică</h1>
        <p className="text-slate-500">Introdu numele pentru a începe testul.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Nume candidat</label>
          <input 
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Ion Popescu"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600 border border-slate-100">
          <h3 className="font-bold mb-2 uppercase text-[10px] tracking-widest text-slate-400">Instrucțiuni:</h3>
          <ul className="list-disc ml-4 space-y-1">
            <li>20 întrebări selectate aleatoriu</li>
            <li>Categorii: SIEM, XDR, VAPT, DFIR, OWASP</li>
            <li>Timp limită: 60 secunde per întrebare</li>
            <li>Analiză detaliată disponibilă la finalul sesiunii</li>
          </ul>
        </div>

        <button 
          type="submit"
          disabled={!name.trim()}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform active:scale-95 transition-all"
        >
          Începe testul
        </button>
      </form>
    </div>
  );
};

export default Landing;
