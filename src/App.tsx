import "./App.css";

export default function App() {
  return (
    <div className="app-root">
      <header className="header">
        <h1 className="logo">ClipTok</h1>
      </header>

      <main className="main-shell">
        <section className="main-card">
          <h2>Welcome to ClipTok</h2>
          <p>Your new social platform for fast, fun, creative clips.</p>
        </section>

        <section className="main-card">
          <h2>Feed</h2>
          <p>Content will appear here…</p>
        </section>
      </main>
    </div>
  );
}
