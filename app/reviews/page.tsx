import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Reviews",
  description:
    "Independent reviews, comparisons and practical buying guides for AI tools, productivity software, hosting and online services.",
  alternates: {
    canonical: "/reviews",
  },
};

const upcoming = [
  "Writesonic vs Jasper",
  "Best AI Writing Tools",
  "Best AI Video Generators",
  "Best Website Builders",
  "Best Email Marketing Platforms",
  "Best Password Managers",
  "Best Web Hosting for Beginners",
];

export default function ReviewsPage() {
  return (
    <main className="page">
      <div className="container">
        <div className="eyebrow">Independent software guidance</div>

        <h1>Software Reviews</h1>

        <p className="lead">
          Clear, practical reviews designed to help you compare software before
          spending money.
        </p>

        <section>
          <h2>Latest Reviews</h2>

          <div className="grid">
            <article className="card">
              <span className="tag">AI Writing & SEO</span>

              <h3>
                <Link href="/reviews/writesonic-review">
                  Writesonic Review 2026: Is It Worth It?
                </Link>
              </h3>

              <p>
                A practical look at Writesonic&apos;s AI writing, SEO tools,
                strengths, limitations, and who it may be best suited for.
              </p>

              <p style={{ marginTop: "18px" }}>
                <Link
                  href="/reviews/writesonic-review"
                  style={{
                    color: "var(--accent)",
                    fontWeight: 700,
                  }}
                >
                  Read review →
                </Link>
              </p>
            </article>
          </div>
        </section>

        <section>
          <h2>Coming Next</h2>

          <div className="grid">
            {upcoming.map((item) => (
              <article className="card" key={item}>
                <span className="tag">Coming soon</span>
                <h3>{item}</h3>
                <p>
                  Independent analysis focused on features, pricing, trade-offs,
                  and real buying decisions.
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
