const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;

export async function fetchQuestions(category, difficulty, count = 5) {
  const prompt = `Generate ${count} ${difficulty} ${category} aptitude questions for Indian BCA/IT students.
Return ONLY valid JSON array, no markdown, no explanation:
[{"q":"question text","options":["A","B","C","D"],"answer":0,"explanation":"why A is correct"}]
answer is 0-indexed. Make questions realistic and varied.`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await res.json();
  const text = data.content?.map((c) => c.text || "").join("") || "[]";
  const clean = text.replace(/```json|```/g, "").trim();
  return JSON.parse(clean);
}