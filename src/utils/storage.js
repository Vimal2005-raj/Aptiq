export function getUsers() {
  try { return JSON.parse(localStorage.getItem("apt_users") || "{}"); } catch { return {}; }
}
export function saveUsers(u) { localStorage.setItem("apt_users", JSON.stringify(u)); }

export function getHistory(uid) {
  try { return JSON.parse(localStorage.getItem(`apt_hist_${uid}`) || "[]"); } catch { return []; }
}
export function saveHistory(uid, h) { localStorage.setItem(`apt_hist_${uid}`, JSON.stringify(h)); }

export function getCustomQs() {
  try { return JSON.parse(localStorage.getItem("apt_custom_qs") || "[]"); } catch { return []; }
}
export function saveCustomQs(q) { localStorage.setItem("apt_custom_qs", JSON.stringify(q)); }