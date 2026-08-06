export const metadata = { title: "Reviews" };

const planned = [
  "Best AI writing tools",
  "Best AI video generators",
  "Best website builders",
  "Best email marketing platforms",
  "Best password managers",
  "Best web hosting for beginners",
];

export default function ReviewsPage() {
  return (
    <main className="page">
      <div className="container">
        <div className="eyebrow">Editorial roadmap</div>
        <h1>Software reviews</h1>
        <p className="lead">Evidence-led reviews designed around practical buying decisions.</p>
        <div className="grid">
          {planned.map((item) => (
            <article className="card" key={item}>
              <span className="tag">Coming soon</span>
              <h3>{item}</h3>
              <p>Testing criteria, pricing analysis and a transparent recommendation.</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
