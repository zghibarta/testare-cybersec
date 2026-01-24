
import React, { useState } from 'react';

interface AdminAuthProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const AdminAuth: React.FC<AdminAuthProps> = ({ onSuccess, onCancel }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // În timpul build-ului (Vercel/GitHub Actions), procesul de build înlocuiește această valoare.
    // Dacă nu e setată, folosim fallback-ul definit în vite.config.ts
    const securePassword = process.env.ADMIN_PASSWORD;
    
    if (password === securePassword) {
      onSuccess();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 max-w-sm w-full animate-fadeIn">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Acces Securizat</h2>
        <p className="text-slate-500 text-sm mt-2">Introduceți cheia de acces administrativ.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <input 
            type="password"
            autoFocus
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            placeholder="············"
            className={`w-full px-4 py-3 rounded-xl border-2 text-center text-xl outline-none transition-all ${
              error 
                ? 'border-red-500 bg-red-50 ring-4 ring-red-100' 
                : 'border-slate-100 bg-slate-50 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50'
            }`}
          />
          {error && <p className="text-red-500 text-xs mt-2 font-bold text-center uppercase tracking-tighter">Acces respins. Cod incorect.</p>}
        </div>

        <div className="flex space-x-3">
          <button 
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-3 border-2 border-slate-100 text-slate-500 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors"
          >
            Renunță
          </button>
          <button 
            type="submit"
            className="flex-1 px-4 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-black transition-all shadow-lg active:scale-95"
          >
            Verifică
          </button>
        </div>
      </form>
      
      <div className="mt-8 pt-6 border-t border-slate-50">
        <div className="flex items-center space-x-2 text-blue-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-tight">Info Deployment</span>
        </div>
        <p className="text-[10px] text-slate-400 leading-relaxed italic">
          Pentru producție, setați <code>ADMIN_PASSWORD</code> ca secret în GitHub Actions sau Vercel Environment Variables.
        </p>
      </div>
    </div>
  );
};

export default AdminAuth;
