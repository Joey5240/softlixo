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
];

export default function ReviewsPage() {
  return (
    <main className="reviews-page">
      <section className="reviews-hero">
        <div className="reviews-hero-copy">
          <p className="eyebrow">Independent software guidance</p>

          <h1>
            Reviews that help you
            <span> buy better software.</span>
          </h1>

          <p className="lead">
            Clear breakdowns of features, trade-offs, pricing and who each tool
            is actually best for.
          </p>
        </div>

        <div className="reviews-hero-stat">
          <span className="stat-label">Editorial focus</span>
          <strong>Useful before impressive.</strong>
          <p>
            No generic “best tool” lists. We focus on real buying decisions and
            practical differences.
          </p>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Featured review</p>
            <h2>Start here</h2>
          </div>

          <span className="section-note">Updated August 2026</span>
        </div>

        <Link
          href="/reviews/writesonic-review"
          className="featured-review-card"
        >
          <div className="featured-review-content">
            <div className="featured-review-topline">
              <span className="tag">AI Writing & SEO</span>
              <span className="read-time">8 min read</span>
            </div>

            <h3>Writesonic Review 2026: Is It Worth It?</h3>

            <p>
              A practical look at Writesonic&apos;s AI writing, SEO tools,
              strengths, limitations and who should actually consider paying
              for it.
            </p>

            <div className="review-meta-grid">
              <div>
                <span>Best for</span>
                <strong>Marketers & SEO teams</strong>
              </div>

              <div>
                <span>Editorial rating</span>
                <strong>4.3 / 5</strong>
              </div>

              <div>
                <span>Focus</span>
                <strong>Content + SEO workflows</strong>
              </div>
            </div>

            <div className="featured-review-cta">
              Read full review <span>→</span>
            </div>
          </div>

          <div className="featured-review-visual">
            <div className="visual-orb visual-orb-one" />
            <div className="visual-orb visual-orb-two" />

            <div className="score-panel">
              <span className="score-kicker">SOFTLIXO SCORE</span>
              <strong>4.3</strong>
              <span>/ 5</span>
            </div>

            <div className="mini-proof">
              <span>Best suited to</span>
              <strong>Teams publishing regularly</strong>
            </div>
          </div>
        </Link>
      </section>

      <section className="coming-section">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Editorial roadmap</p>
            <h2>Coming next</h2>
          </div>

          <span className="section-note">
            Built around high-intent software research
          </span>
        </div>

        <div className="coming-grid">
          {upcoming.map((item, index) => (
            <article className="coming-card" key={item}>
              <span className="coming-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <span className="tag">In progress</span>
                <h3>{item}</h3>
                <p>
                  Independent analysis focused on features, pricing, trade-offs
                  and buying decisions.
                </p>
              </div>

              <span className="coming-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
