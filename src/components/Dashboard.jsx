import { CATEGORIES } from "../constants";
import { getHistory } from "../utils/storage";
import CategoryCard from "./CategoryCard";
import styles from "../styles/styles";

export default function Dashboard({ user, onStart, onLogout }) {
  const history = getHistory(user.username);
  const avg = history.length ? Math.round(history.reduce((a, b) => a + b.pct, 0) / history.length) : 0;
  const best = history.length ? Math.max(...history.map(h => h.pct)) : 0;

  const cats = CATEGORIES.map(c => {
    const ch = history.filter(h => h.category === c);
    return { c, avg: ch.length ? Math.round(ch.reduce((a, b) => a + b.pct, 0) / ch.length) : null, count: ch.length };
  });

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <span style={styles.navLogo}>⚡ AptIQ</span>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={styles.navUser}>👤 {user.name}</span>
          <button style={styles.logoutBtn} onClick={onLogout}>Logout</button>
        </div>
      </nav>

      <div style={styles.dashHero}>
        <h2 style={styles.dashGreet}>Hello, {user.name.split(" ")[0]}! 👋</h2>
        <p style={styles.dashSub}>Ready to sharpen your aptitude skills?</p>
        <div style={styles.statRow}>
          <div style={styles.statCard}><div style={styles.statNum}>{history.length}</div><div style={styles.statLabel}>Tests Taken</div></div>
          <div style={styles.statCard}><div style={styles.statNum}>{avg}%</div><div style={styles.statLabel}>Avg Score</div></div>
          <div style={styles.statCard}><div style={styles.statNum}>{best}%</div><div style={styles.statLabel}>Best Score</div></div>
        </div>
      </div>

      <h3 style={styles.sectionTitle}>Start a Test</h3>
      <div style={styles.catGrid}>
        {CATEGORIES.map(cat => <CategoryCard key={cat} cat={cat} onStart={onStart} />)}
      </div>

      {cats.some(c => c.count > 0) && (
        <>
          <h3 style={styles.sectionTitle}>Performance by Category</h3>
          <div style={styles.perfRow}>
            {cats.filter(c => c.count > 0).map(({ c, avg, count }) => (
              <div key={c} style={styles.perfCard}>
                <div style={styles.perfCat}>{c}</div>
                <div style={styles.perfBar}>
                  <div style={{ ...styles.perfFill, width: `${avg}%`, background: avg >= 70 ? "#22c55e" : avg >= 40 ? "#f59e0b" : "#ef4444" }} />
                </div>
                <div style={styles.perfNum}>{avg}% ({count} tests)</div>
              </div>
            ))}
          </div>
        </>
      )}

      {history.length > 0 && (
        <>
          <h3 style={styles.sectionTitle}>Recent Tests</h3>
          <div style={styles.histList}>
            {[...history].reverse().slice(0, 5).map((h, i) => (
              <div key={i} style={styles.histItem}>
                <span style={styles.histCat}>{h.category}</span>
                <span style={styles.histDiff}>{h.difficulty}</span>
                <span style={{ ...styles.histScore, color: h.pct >= 70 ? "#22c55e" : h.pct >= 40 ? "#f59e0b" : "#ef4444" }}>
                  {h.score}/{h.total} ({h.pct}%)
                </span>
                <span style={styles.histDate}>{h.date}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}