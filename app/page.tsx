import Link from "next/link";

const categories = [
  ["AI Tools", "Writing, research, image, video and automation tools."],
  ["Productivity", "Task management, notes, collaboration and workflow software."],
  ["Web & Hosting", "Hosting, domain, website builders and creator infrastructure."],
  ["Marketing", "Email, CRM, analytics and conversion tools."],
  ["Security", "VPNs, password managers, backups and privacy software."],
  ["Comparisons", "Side-by-side breakdowns focused on real buying decisions."],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Independent software guidance</div>
          <h1>Choose better software. Waste less money.</h1>
          <p className="lead">
            Softlixo publishes clear reviews and practical comparisons for AI tools,
            productivity apps, hosting and online services.
          </p>
          <div className="actions">
            <Link className="button primary" href="/reviews">Explore reviews</Link>
            <Link className="button secondary" href="/categories">Browse categories</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What we cover</h2>
          <div className="grid">
            {categories.map(([title, text]) => (
              <article className="card" key={title}>
                <span className="tag">Category</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notice">
            Softlixo is new. Our first in-depth reviews are being prepared. We will clearly
            label affiliate links and separate commercial relationships from editorial judgment.
          </div>
        </div>
      </section>
    </main>
  );
}
