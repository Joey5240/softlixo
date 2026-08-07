import Link from "next/link";

const categories = [
  ["AI Tools", "Writing, research, image, video and automation tools."],
  ["Productivity", "Task management, notes, collaboration and workflow software."],
  ["Web & Hosting", "Hosting, domains, website builders and creator infrastructure."],
  ["Marketing", "Email, CRM, analytics and conversion tools."],
  ["Security", "VPNs, password managers, backups and privacy software."],
  ["Comparisons", "Side-by-side breakdowns focused on real buying decisions."],
];

const marquee = [
  "AI TOOLS",
  "PRODUCTIVITY",
  "WEB & HOSTING",
  "MARKETING",
  "SECURITY",
  "COMPARISONS",
];

export default function Home() {
  return (
    <main className="ultimate-home">
      <section className="ultimate-hero">
        <div className="hero-grid-glow" />
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="hero-orb hero-orb-c" />

        <div className="ultimate-hero-inner">
          <div className="ultimate-hero-copy">
            <div className="eyebrow">Independent software guidance</div>

            <h1>
              Software is crowded.
              <span> We make the choice obvious.</span>
            </h1>

            <p className="ultimate-lead">
              Independent reviews, comparisons and practical guides for AI tools,
              productivity software, hosting and online services.
            </p>

            <div className="hero-actions">
              <Link href="/reviews" className="button primary">
                Explore reviews
                <span>↗</span>
              </Link>

              <Link href="/categories" className="button secondary">
                Browse categories
              </Link>
            </div>

            <div className="hero-proof-row">
              <div>
                <span>Focused on</span>
                <strong>Real buying decisions</strong>
              </div>

              <div>
                <span>Editorial model</span>
                <strong>Independent first</strong>
              </div>

              <div>
                <span>Built for</span>
                <strong>People comparing software</strong>
              </div>
            </div>
          </div>

          <div className="software-universe">
            <div className="universe-ring universe-ring-one" />
            <div className="universe-ring universe-ring-two" />
            <div className="universe-ring universe-ring-three" />

            <div className="universe-core">
              <span>SOFTLIXO</span>
              <strong>Choose better.</strong>
            </div>

            <div className="floating-chip chip-ai">
              <span>AI</span>
              <strong>Tools</strong>
            </div>

            <div className="floating-chip chip-seo">
              <span>SEO</span>
              <strong>Research</strong>
            </div>

            <div className="floating-chip chip-hosting">
              <span>WEB</span>
              <strong>Hosting</strong>
            </div>

            <div className="floating-chip chip-security">
              <span>SAFE</span>
              <strong>Security</strong>
            </div>

            <div className="floating-chip chip-growth">
              <span>GROW</span>
              <strong>Marketing</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-section">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, index) => (
            <div className="marquee-item" key={`${item}-${index}`}>
              <span>{item}</span>
              <i>✦</i>
            </div>
          ))}
        </div>
      </section>

      <section className="ultimate-featured">
        <div className="ultimate-section-heading">
          <div>
            <div className="eyebrow">Featured review</div>
            <h2>One tool. No fluff.</h2>
          </div>

          <p>
            A closer look at what works, what does not, and who should actually
            consider paying.
          </p>
        </div>

        <Link
          href="/reviews/writesonic-review"
          className="ultimate-feature-card"
        >
          <div className="feature-copy">
            <div className="feature-topline">
              <span className="tag">AI Writing & SEO</span>
              <span>Published August 2026</span>
            </div>

            <h3>Writesonic Review 2026</h3>

            <p>
              AI writing, SEO workflows, search visibility and where the product
              makes sense — without pretending every feature is essential.
            </p>

            <div className="feature-facts">
              <div>
                <span>Best for</span>
                <strong>Marketers & SEO teams</strong>
              </div>

              <div>
                <span>Main strength</span>
                <strong>Content + SEO in one workflow</strong>
              </div>

              <div>
                <span>Review type</span>
                <strong>Independent breakdown</strong>
              </div>
            </div>

            <div className="feature-link">
              Read full review <span>→</span>
            </div>
          </div>

          <div className="feature-visual">
            <div className="feature-mesh" />
            <div className="feature-glass-card feature-glass-main">
              <span>REVIEW SNAPSHOT</span>
              <strong>Who is this actually for?</strong>
              <p>Teams publishing and optimizing content regularly.</p>
            </div>

            <div className="feature-glass-card feature-glass-mini">
              <span>EDITORIAL FOCUS</span>
              <strong>Value over hype</strong>
            </div>

            <div className="feature-light feature-light-a" />
            <div className="feature-light feature-light-b" />
          </div>
        </Link>
      </section>

      <section className="manifesto-section">
        <div className="manifesto-kicker">Not another “best tools” website.</div>

        <h2>
          We care less about
          <span> sounding impressive</span>
          <br />
          and more about
          <span> helping you decide.</span>
        </h2>
      </section>

      <section className="bento-section">
        <div className="ultimate-section-heading">
          <div>
            <div className="eyebrow">Explore the site</div>
            <h2>Different questions need different answers.</h2>
          </div>
        </div>

        <div className="bento-grid">
          <Link href="/reviews" className="bento-card bento-large">
            <span className="bento-number">01</span>
            <div className="tag">Reviews</div>
            <h3>Should you actually pay for it?</h3>
            <p>
              Practical reviews focused on trade-offs, usability and buying
              decisions.
            </p>
            <span className="bento-arrow">↗</span>
          </Link>

          <div className="bento-card bento-tall">
            <span className="bento-number">02</span>
            <div className="tag">Comparisons</div>
            <h3>Which tool wins for your use case?</h3>
            <div className="compare-lines">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <Link href="/categories" className="bento-card bento-wide">
            <span className="bento-number">03</span>
            <div className="tag">Categories</div>
            <h3>Explore software by what you need to get done.</h3>
            <span className="bento-arrow">↗</span>
          </Link>

          <div className="bento-card bento-glow">
            <span className="bento-number">04</span>
            <div className="tag">Editorial</div>
            <h3>Useful before impressive.</h3>
            <p>
              We would rather explain why a product is not for you than force a
              recommendation.
            </p>
          </div>
        </div>
      </section>

      <section className="categories-universe">
        <div className="ultimate-section-heading">
          <div>
            <div className="eyebrow">Software universe</div>
            <h2>What we cover</h2>
          </div>
        </div>

        <div className="ultimate-category-grid">
          {categories.map(([title, text], index) => (
            <Link href="/categories" className="ultimate-category-card" key={title}>
              <span className="category-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>

              <span className="category-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="method-section">
        <div className="method-heading">
          <div className="eyebrow">How we review software</div>
          <h2>Less guessing. More structure.</h2>
        </div>

        <div className="method-grid">
          <div className="method-step">
            <span>01</span>
            <strong>Research</strong>
            <p>Understand the product, category, positioning and alternatives.</p>
          </div>

          <div className="method-step">
            <span>02</span>
            <strong>Test</strong>
            <p>Look at actual workflows, limitations and where the product fits.</p>
          </div>

          <div className="method-step">
            <span>03</span>
            <strong>Compare</strong>
            <p>Measure the tool against alternatives and practical user needs.</p>
          </div>

          <div className="method-step">
            <span>04</span>
            <strong>Update</strong>
            <p>Revisit reviews as products, pricing and features change.</p>
          </div>
        </div>
      </section>

      <section className="ultimate-cta">
        <div className="cta-glow" />

        <div>
          <div className="eyebrow">Start exploring</div>
          <h2>
            Better software choices
            <span> start with better questions.</span>
          </h2>

          <p>
            Browse independent reviews and comparisons before you spend money on
            another subscription.
          </p>

          <Link href="/reviews" className="button primary">
            Explore reviews
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
