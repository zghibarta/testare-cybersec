
import React, { useState, useEffect, useCallback } from 'react';
import { View, SecureQuestion, CandidateResult, Category } from './types';
import { generateQuizSet, stripAnswers } from './utils/quizHelpers';
import { MasterAnswerKey } from './data/questions';
import { saveResultToFirebase, getResultsFromFirebase, deleteResultFromFirebase } from './utils/firebaseHelpers';
import { auth } from './firebase';
import { signInAnonymously } from 'firebase/auth';
import Landing from './components/Landing';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Dashboard from './components/Dashboard';
import AdminAuth from './components/AdminAuth';
import CandidateDetails from './components/CandidateDetails';

const App: React.FC = () => {
  const [view, setView] = useState<View>('LANDING');
  const [candidateName, setCandidateName] = useState('');
  const [currentQuiz, setCurrentQuiz] = useState<SecureQuestion[]>([]);
  const [lastResult, setLastResult] = useState<CandidateResult | null>(null);
  const [resultsHistory, setResultsHistory] = useState<CandidateResult[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Ruta "invizibilă" pentru admin: #dashboard
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#dashboard' && view !== 'DASHBOARD') {
        setView('ADMIN_AUTH');
      } else if (window.location.hash === '' && (view === 'ADMIN_AUTH' || view === 'DASHBOARD')) {
        setView('LANDING');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [view]);

  useEffect(() => {
    const loadResults = async () => {
      try {
        // Sign in anonymously to access Firestore
        if (!auth.currentUser) {
          await signInAnonymously(auth);
        }
        const results = await getResultsFromFirebase();
        setResultsHistory(results);
      } catch (error) {
        console.error("Failed to load results:", error);
        // Fallback to localStorage if Firebase fails
        const saved = localStorage.getItem('quiz_results');
        if (saved) {
          setResultsHistory(JSON.parse(saved));
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadResults();
  }, []);

  const saveResult = useCallback(async (result: CandidateResult) => {
    try {
      await saveResultToFirebase(result);
      setResultsHistory(prev => [result, ...prev]);
    } catch (error) {
      console.error("Failed to save result:", error);
      // Fallback to localStorage
      setResultsHistory(prev => {
        const updated = [result, ...prev];
        localStorage.setItem('quiz_results', JSON.stringify(updated));
        return updated;
      });
    }
  }, []);

  const startQuiz = async (name: string) => {
    try {
      if (!auth.currentUser) {
        await signInAnonymously(auth);
      }
      const freshQuiz = generateQuizSet();
      setCandidateName(name);
      setCurrentQuiz(freshQuiz);
      setView('QUIZ');
    } catch (error) {
      console.error("Failed to sign in:", error);
      // Proceed anyway, but results might not save
      const freshQuiz = generateQuizSet();
      setCandidateName(name);
      setCurrentQuiz(freshQuiz);
      setView('QUIZ');
    }
  };

  const finishQuiz = async (userAnswers: number[]) => {
    let score = 0;
    const catPerf: Record<Category, number> = {
      [Category.SIEM]: 0,
      [Category.XDR]: 0,
      [Category.VAPT]: 0,
      [Category.DFIR]: 0,
      [Category.OWASP]: 0
    };

    currentQuiz.forEach((q, idx) => {
      const correctIdx = MasterAnswerKey[q.id];
      if (userAnswers[idx] === correctIdx) {
        score++;
        catPerf[q.category] += 1;
      }
    });

    const result: CandidateResult = {
      id: Math.random().toString(36).substr(2, 9),
      name: candidateName,
      date: new Date().toLocaleString('ro-RO'),
      score,
      totalQuestions: currentQuiz.length,
      categoryPerformance: catPerf,
      responses: userAnswers,
      questions: currentQuiz
    };

    setLastResult(result);
    await saveResult(result);
    setView('RESULTS');
  };

  const deleteResult = useCallback(async (id: string) => {
    try {
      await deleteResultFromFirebase(id);
      setResultsHistory(prev => prev.filter(r => r.id !== id));
    } catch (error) {
      console.error("Failed to delete result:", error);
      // Fallback to local update
      setResultsHistory(prev => {
        const updated = prev.filter(r => r.id !== id);
        localStorage.setItem('quiz_results', JSON.stringify(updated));
        return updated;
      });
    }
  }, []);

  const viewCandidateDetails = (result: CandidateResult) => {
    setSelectedCandidate(result);
    setView('CANDIDATE_DETAILS');
  };
  const reset = () => {
    setView('LANDING');
    setCandidateName('');
    setCurrentQuiz([]);
    setLastResult(null);
    setSelectedCandidate(null);
  };
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-slate-900 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-center items-center">
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={reset}>
            <div className="w-8 h-8 bg-blue-600 group-hover:bg-blue-500 rounded flex items-center justify-center font-bold transition-colors">C</div>
            <span className="text-xl font-semibold tracking-tight">Evaluare CyberSec</span>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        {view === 'LANDING' && <Landing onStart={startQuiz} />}
        {view === 'QUIZ' && currentQuiz.length > 0 && (
          <Quiz 
            questions={stripAnswers(currentQuiz)} 
            onFinish={finishQuiz} 
          />
        )}
        {view === 'RESULTS' && lastResult && <Results result={lastResult} onRestart={reset} />}
        {view === 'ADMIN_AUTH' && (
          <AdminAuth 
            onSuccess={() => setView('DASHBOARD')} 
            onCancel={() => { window.history.replaceState(null, '', ' '); setView('LANDING'); }} 
          />
        )}
        {view === 'DASHBOARD' && (
          <Dashboard 
            results={resultsHistory} 
            onBack={reset} 
            onViewDetails={viewCandidateDetails}
            onDelete={deleteResult}
          />
        )}
        {view === 'CANDIDATE_DETAILS' && selectedCandidate && (
          <CandidateDetails 
            result={selectedCandidate} 
            onBack={() => setView('DASHBOARD')} 
          />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 p-6 text-center text-slate-500 text-[10px] uppercase tracking-widest">
        &copy; 2026 Agentia de Guvernare Electronica
      </footer>
    </div>
  );
};

export default App;
