import { useState } from "react";
import { DIFFICULTY, CAT_EMOJIS, CAT_COLORS, CAT_DESC } from "../constants";
import styles from "../styles/styles";

export default function CategoryCard({ cat, onStart }) {
  const [diff, setDiff] = useState("Medium");

  return (
    <div style={{ ...styles.catCard, borderTop: `4px solid ${CAT_COLORS[cat]}` }}>
      <div style={styles.catIcon}>{CAT_EMOJIS[cat]}</div>
      <div style={styles.catName}>{cat}</div>
      <div style={styles.catDesc}>{CAT_DESC[cat]}</div>
      <select style={styles.select} value={diff} onChange={e => setDiff(e.target.value)}>
        {DIFFICULTY.map(d => <option key={d}>{d}</option>)}
      </select>
      <button style={{ ...styles.startBtn, background: CAT_COLORS[cat] }} onClick={() => onStart(cat, diff)}>
        Start Test →
      </button>
    </div>
  );
}