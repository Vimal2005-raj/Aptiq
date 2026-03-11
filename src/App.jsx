import { useState } from "react";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import AdminPanel from "./components/AdminPanel";

export default function App() {
  const [user, setUser] = useState(null);
  const [screen, setScreen] = useState("auth"); // auth | dashboard | quiz | result | admin
  const [quizConfig, setQuizConfig] = useState(null);
  const [result, setResult] = useState(null);

  const handleLogin = u => { setUser(u); setScreen(u.isAdmin ? "admin" : "dashboard"); };
  const handleLogout = () => { setUser(null); setScreen("auth"); };
  const handleStart = (cat, diff) => { setQuizConfig({ category: cat, difficulty: diff }); setScreen("quiz"); };
  const handleFinish = res => { setResult(res); setScreen("result"); };

  if (screen === "auth")      return <AuthPage onLogin={handleLogin} />;
  if (screen === "admin")     return <AdminPanel onBack={handleLogout} />;
  if (screen === "dashboard") return <Dashboard user={user} onStart={handleStart} onLogout={handleLogout} />;
  if (screen === "quiz")      return <QuizPage user={user} {...quizConfig} onFinish={handleFinish} onBack={() => setScreen("dashboard")} />;
  if (screen === "result")    return <ResultPage result={result} onBack={() => setScreen("dashboard")} onRetry={() => handleStart(result.category, result.difficulty)} />;
}