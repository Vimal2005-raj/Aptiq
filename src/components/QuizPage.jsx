import { useState, useEffect, useCallback } from "react";
import { getCustomQs, getHistory, saveHistory } from "../utils/storage";
import { fetchQuestions } from "../utils/Api";
import styles from "../styles/styles";

export default function QuizPage({ user, category, difficulty, onFinish, onBack }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(600);
  const [showExp, setShowExp] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const customQs = getCustomQs().filter(q => q.category === category);
        const aiQs = await fetchQuestions(category, difficulty, 5);
        setQuestions([...customQs, ...aiQs].slice(0, 10));
      } catch {
        setErr("Failed to load questions. Check your connection and API key.");
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (loading || submitted) return;
    const id = setInterval(() => setTimer(t => {
      if (t <= 1) { clearInterval(id); submitTest(); return 0; }
      return t - 1;
    }), 1000);
    return () => clearInterval(id);
  }, [loading, submitted]);

  const submitTest = useCallback(() => {
    if (submitted || questions.length === 0) return;
    setSubmitted(true);
    let score = 0;
    questions.forEach((q, i) => { if (answers[i] === q.answer) score++; });
    const pct = Math.round((score / questions.length) * 100);
    const hist = getHistory(user.username);
    hist.push({ category, difficulty, score, total: questions.length, pct, date: new Date().toLocaleDateString("en-IN") });
    saveHistory(user.username, hist);
    onFinish({ questions, answers, score, total: questions.length, pct, category, difficulty });
  }, [submitted, questions, answers]);

  const fmt = s => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  const timerColor = timer < 60 ? "#ef4444" : timer < 180 ? "#f59e0b" : "#22c55e";

  if (loading) return (
    <div style={styles.loadPage}>
      <div style={styles.loader} />
      <p style={styles.loadText}>AI is generating your {difficulty} {category} questions…</p>
    </div>
  );

  if (err) return (
    <div style={styles.loadPage}>
      <p style={{ color: "#ef4444", fontSize: 18 }}>{err}</p>
      <button style={styles.btn} onClick={onBack}>Go Back</button>
    </div>
  );

  const q = questions[current];

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <button style={styles.backBtn} onClick={onBack}>← Back</button>
        <span style={styles.navLogo}>{category} · {difficulty}</span>
        <span style={{ ...styles.timer, color: timerColor }}>⏱ {fmt(timer)}</span>
      </nav>

      <div style={styles.quizWrap}>
        <div style={styles.progress}>
          {questions.map((_, i) => (
            <div key={i} style={{ ...styles.progDot, background: i === current ? "#6366f1" : answers[i] !== undefined ? "#22c55e" : "#334155" }}
              onClick={() => setCurrent(i)} />
          ))}
        </div>

        <div style={styles.qCard}>
          <div style={styles.qNum}>Q{current + 1} of {questions.length}</div>
          <p style={styles.qText}>{q.q}</p>

          <div style={styles.optList}>
            {q.options.map((opt, oi) => {
              let bg = "#1e293b";
              if (answers[current] !== undefined) {
                if (oi === q.answer) bg = "#166534";
                else if (oi === answers[current]) bg = "#7f1d1d";
              }
              return (
                <button key={oi} style={{ ...styles.optBtn, background: bg }}
                  onClick={() => { if (answers[current] === undefined) setAnswers({ ...answers, [current]: oi }); }}>
                  <span style={styles.optLetter}>{String.fromCharCode(65 + oi)}</span> {opt}
                </button>
              );
            })}
          </div>

          {answers[current] !== undefined && (
            <div style={styles.expBox}>
              <button style={styles.expToggle} onClick={() => setShowExp(!showExp)}>
                {showExp ? "Hide" : "Show"} Explanation
              </button>
              {showExp && <p style={styles.expText}>💡 {q.explanation}</p>}
            </div>
          )}
        </div>

        <div style={styles.navBtns}>
          <button style={styles.navBtn} onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0}>← Prev</button>
          {current < questions.length - 1
            ? <button style={styles.navBtn} onClick={() => setCurrent(c => c + 1)}>Next →</button>
            : <button style={{ ...styles.navBtn, background: "#6366f1" }} onClick={submitTest}>Submit Test ✓</button>}
        </div>
      </div>
    </div>
  );
}