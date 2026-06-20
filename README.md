# Claude Chatbot — Next.js Workshop

A minimal fullstack chatbot built with **Next.js (App Router)** and the **Claude API**, made for a BCA fullstack development workshop.

## What's inside

- `app/page.js` — chat UI (frontend, client component)
- `app/api/chat/route.js` — API route that calls Claude (backend, server-only)
- Tailwind CSS for styling

## Setup

1. **Fork this repo** to your own GitHub account (top-right "Fork" button).

2. **Clone your fork:**
   ```bash
   git clone https://github.com/<your-username>/chatbot-dbcy.git
   cd chatbot-dbcy
   ```

3. **Create your own working branch:**
   ```bash
   git checkout -b my-chatbot
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Add your API key:**
   - Copy `.env.local.example` to `.env.local`
   - Get a key from [console.anthropic.com](https://console.anthropic.com)
   - Paste it into `.env.local`:
     ```
     ANTHROPIC_API_KEY=your-actual-key-here
     ```
   - Never commit `.env.local` — it's already in `.gitignore`

6. **Run the dev server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

7. **Push your work:**
   ```bash
   git add .
   git commit -m "completed claude chatbot"
   git push origin my-chatbot
   ```

## How it works

```
Browser (page.js) → fetch("/api/chat") → route.js → Anthropic API → response → Browser
```

The API key only ever lives on the server (`route.js`). The browser never sees it — that's why we don't call Claude directly from `page.js`.

## Workshop notes

- `app/api/chat/route.js` shows a basic Next.js API route: accept POST, call an external API, return JSON.
- `app/page.js` shows `useState` for chat history and `fetch` to talk to your own backend.
- Try extending it: streaming responses, persisting chat history, system prompts.
