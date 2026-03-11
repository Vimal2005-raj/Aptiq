import { useState } from "react";
import { ADMIN_CREDS } from "../constants";
import { getUsers, saveUsers } from "../utils/storage";
import { hashPw } from "../utils/auth";
import styles from "../styles/styles";

export default function AuthPage({ onLogin }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", username: "", password: "" });
  const [err, setErr] = useState("");
  const [adminMode, setAdminMode] = useState(false);

  const submit = () => {
    setErr("");
    if (adminMode) {
      if (form.username === ADMIN_CREDS.username && form.password === ADMIN_CREDS.password) {
        onLogin({ username: "admin", name: "Administrator", isAdmin: true });
      } else setErr("Invalid admin credentials.");
      return;
    }
    const users = getUsers();
    if (mode === "login") {
      const u = users[form.username];
      if (!u || u.pw !== hashPw(form.password)) { setErr("Invalid username or password."); return; }
      onLogin({ ...u, username: form.username });
    } else {
      if (!form.name || !form.username || !form.password) { setErr("All fields required."); return; }
      if (users[form.username]) { setErr("Username already taken."); return; }
      users[form.username] = { name: form.name, pw: hashPw(form.password) };
      saveUsers(users);
      onLogin({ name: form.name, username: form.username });
    }
  };

  return (
    <div style={styles.authBg}>
      <div style={styles.authCard}>
        <div style={styles.authLogo}>
          <span style={styles.logoIcon}>⚡</span>
          <h1 style={styles.logoTitle}>AptIQ</h1>
          <p style={styles.logoSub}>AI-Powered Aptitude Training</p>
        </div>

        {adminMode ? (
          <>
            <p style={styles.authSwitch}>Admin Login</p>
            <input style={styles.input} placeholder="Admin Username" value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })} />
            <input style={styles.input} type="password" placeholder="Admin Password" value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })} />
            {err && <p style={styles.err}>{err}</p>}
            <button style={styles.btn} onClick={submit}>Login as Admin</button>
            <p style={styles.authSwitch}><span style={styles.link} onClick={() => setAdminMode(false)}>← Back to User Login</span></p>
          </>
        ) : (
          <>
            <div style={styles.tabRow}>
              {["login", "signup"].map(m => (
                <button key={m} style={{ ...styles.tab, ...(mode === m ? styles.tabActive : {}) }}
                  onClick={() => { setMode(m); setErr(""); }}>
                  {m === "login" ? "Login" : "Sign Up"}
                </button>
              ))}
            </div>
            {mode === "signup" && (
              <input style={styles.input} placeholder="Full Name" value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })} />
            )}
            <input style={styles.input} placeholder="Username" value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })} />
            <input style={styles.input} type="password" placeholder="Password" value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              onKeyDown={e => e.key === "Enter" && submit()} />
            {err && <p style={styles.err}>{err}</p>}
            <button style={styles.btn} onClick={submit}>{mode === "login" ? "Login" : "Create Account"}</button>
            <p style={styles.authSwitch}><span style={styles.link} onClick={() => setAdminMode(true)}>Admin Login →</span></p>
          </>
        )}
      </div>
    </div>
  );
}