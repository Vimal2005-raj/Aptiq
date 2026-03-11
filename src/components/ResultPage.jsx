import styles from "../styles/styles";

export default function ResultPage({ result, onBack, onRetry }) {
  const { questions, answers, score, total, pct, category, difficulty } = result;
  const grade = pct >= 80 ? "Excellent! 🏆" : pct >= 60 ? "Good Job! 👍" : pct >= 40 ? "Keep Practicing 💪" : "Needs Improvement 📚";
  const color = pct >= 70 ? "#22c55e" : pct >= 40 ? "#f59e0b" : "#ef4444";

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <button style={styles.backBtn} onClick={onBack}>← Dashboard</button>
        <span style={styles.navLogo}>Result</span>
        <span />
      </nav>

      <div style={styles.resultHero}>
        <div style={{ ...styles.scoreBig, color }}>{pct}%</div>
        <div style={styles.gradeText}>{grade}</div>
        <div style={styles.scoreDetail}>{score} correct out of {total} · {category} · {difficulty}</div>
      </div>

      <h3 style={styles.sectionTitle}>Review Answers</h3>
      {questions.map((q, i) => {
        const correct = answers[i] === q.answer;
        return (
          <div key={i} style={{ ...styles.reviewCard, borderLeft: `4px solid ${correct ? "#22c55e" : "#ef4444"}` }}>
            <p style={styles.reviewQ}><strong>Q{i + 1}.</strong> {q.q}</p>
            <p style={{ color: "#94a3b8", fontSize: 14 }}>
              Your answer: <strong style={{ color: correct ? "#22c55e" : "#ef4444" }}>
                {answers[i] !== undefined ? q.options[answers[i]] : "Not answered"}
              </strong>
            </p>
            {!correct && <p style={{ color: "#94a3b8", fontSize: 14 }}>Correct: <strong style={{ color: "#22c55e" }}>{q.options[q.answer]}</strong></p>}
            <p style={styles.expText}>💡 {q.explanation}</p>
          </div>
        );
      })}

      <div style={{ display: "flex", gap: 12, padding: "0 16px 32px" }}>
        <button style={styles.btn} onClick={onRetry}>Try Again</button>
        <button style={{ ...styles.btn, background: "#334155" }} onClick={onBack}>Dashboard</button>
      </div>
    </div>
  );
}