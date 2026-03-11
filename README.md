# ⚡ AptIQ – AI-Powered Aptitude Training

AptIQ is a full-stack React app that uses the **Claude AI API** to dynamically generate aptitude questions for BCA/IT students across Quantitative, Logical, and Verbal categories.

---

## 🚀 Features

- 🔐 User authentication (signup / login) with localStorage
- 🤖 AI-generated questions via Claude (Anthropic API)
- 🧠 3 categories: Quantitative, Logical, Verbal
- ⚙️ 3 difficulty levels: Easy, Medium, Hard
- ⏱ 10-minute countdown timer per test
- 📊 Dashboard with performance analytics
- 💡 Instant answer explanations
- 🛠 Admin panel to add custom questions

---

## 🛠 Tech Stack

- **React 18** + Vite
- **Anthropic Claude API** (`claude-sonnet-4-20250514`)
- Pure CSS-in-JS (no external UI libraries)

---

## ⚙️ Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/aptiq.git
cd aptiq
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
cp .env.example .env
```
Open `.env` and add your Anthropic API key:
```
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here
```
> Get your API key at https://console.anthropic.com

### 4. Run the development server
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
```

---

## 🔑 Admin Login

| Field    | Value      |
|----------|------------|
| Username | `admin`    |
| Password | `admin123` |

> **Change these credentials in `src/constants.js` before deploying!**

---

## 📁 Project Structure

```
src/
├── components/       # UI screens
│   ├── AuthPage.jsx
│   ├── Dashboard.jsx
│   ├── CategoryCard.jsx
│   ├── QuizPage.jsx
│   ├── ResultPage.jsx
│   └── AdminPanel.jsx
├── utils/
│   ├── auth.js       # Password hashing
│   ├── storage.js    # localStorage helpers
│   └── claudeApi.js  # Anthropic API integration
├── styles/
│   └── styles.js     # Centralized styles
├── constants.js
├── App.jsx
└── main.jsx
```

---

## ⚠️ Security Note

This app calls the Anthropic API **directly from the browser** for demo purposes.  
For production, move API calls to a **backend server** (Node.js/Express) to keep your API key private.

---

## 📄 License

MIT © 2025