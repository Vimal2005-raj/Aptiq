import { useState } from "react";
import { CATEGORIES, DIFFICULTY } from "../constants";
import { getCustomQs, saveCustomQs } from "../utils/storage";
import styles from "../styles/styles";

export default function AdminPanel({ onBack }) {
  const [form, setForm] = useState({ q: "", options: ["", "", "", ""], answer: 0, explanation: "", category: "Quantitative", difficulty: "Medium" });
  const [qs, setQs] = useState(getCustomQs());
  const [msg, setMsg] = useState("");

  const setOpt = (i, v) => { const opts = [...form.options]; opts[i] = v; setForm({ ...form, options: opts }); };

  const save = () => {
    if (!form.q || form.options.some(o => !o) || !form.explanation) { setMsg("❌ Fill all fields."); return; }
    const updated = [...qs, { ...form, id: Date.now() }];
    saveCustomQs(updated);
    setQs(updated);
    setForm({ q: "", options: ["", "", "", ""], answer: 0, explanation: "", category: "Quantitative", difficulty: "Medium" });
    setMsg("✓ Question added!");
    setTimeout(() => setMsg(""), 2000);
  };

  const del = id => { const updated = qs.filter(q => q.id !== id); saveCustomQs(updated); setQs(updated); };

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <button style={styles.backBtn} onClick={onBack}>← Logout</button>
        <span style={styles.navLogo}>⚙️ Admin Panel</span>
        <span />
      </nav>

      <div style={styles.adminWrap}>
        <h3 style={styles.sectionTitle}>Add New Question</h3>
        <textarea style={styles.textarea} placeholder="Question text..." value={form.q} rows={3}
          onChange={e => setForm({ ...form, q: e.target.value })} />

        {form.options.map((o, i) => (
          <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <span style={styles.optLabel}>{String.fromCharCode(65 + i)}</span>
            <input style={{ ...styles.input, margin: 0, flex: 1 }} placeholder={`Option ${String.fromCharCode(65 + i)}`} value={o}
              onChange={e => setOpt(i, e.target.value)} />
          </div>
        ))}

        <div style={styles.formRow}>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Correct Answer</label>
            <select style={styles.select} value={form.answer} onChange={e => setForm({ ...form, answer: Number(e.target.value) })}>
              {["A", "B", "C", "D"].map((l, i) => <option key={i} value={i}>{l}</option>)}
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Category</label>
            <select style={styles.select} value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
              {CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Difficulty</label>
            <select style={styles.select} value={form.difficulty} onChange={e => setForm({ ...form, difficulty: e.target.value })}>
              {DIFFICULTY.map(d => <option key={d}>{d}</option>)}
            </select>
          </div>
        </div>

        <input style={styles.input} placeholder="Explanation (why is the answer correct?)" value={form.explanation}
          onChange={e => setForm({ ...form, explanation: e.target.value })} />

        {msg && <p style={{ color: msg.startsWith("✓") ? "#22c55e" : "#ef4444", marginBottom: 8 }}>{msg}</p>}
        <button style={styles.btn} onClick={save}>Add Question</button>

        <h3 style={{ ...styles.sectionTitle, marginTop: 32 }}>Custom Questions ({qs.length})</h3>
        {qs.length === 0 && <p style={{ color: "#64748b" }}>No custom questions yet.</p>}
        {qs.map((q, i) => (
          <div key={q.id} style={styles.adminQCard}>
            <p style={{ color: "#e2e8f0", marginBottom: 4 }}><strong>Q{i + 1}.</strong> {q.q}</p>
            <p style={{ color: "#64748b", fontSize: 13 }}>{q.category} · {q.difficulty} · Correct: {q.options[q.answer]}</p>
            <button style={styles.delBtn} onClick={() => del(q.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}