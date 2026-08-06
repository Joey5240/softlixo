export const metadata = { title: "Categories" };

export default function CategoriesPage() {
  return (
    <main className="page">
      <div className="container">
        <div className="eyebrow">Browse</div>
        <h1>Categories</h1>
        <div className="grid">
          {["AI Tools","Productivity","Web & Hosting","Marketing","Security","Business Software"].map((x) => (
            <div className="card" key={x}><h3>{x}</h3><p>Reviews, comparisons and practical guides.</p></div>
          ))}
        </div>
      </div>
    </main>
  );
}
