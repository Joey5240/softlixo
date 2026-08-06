import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://softlixo.com"),
  title: {
    default: "Softlixo | Independent AI & Software Reviews",
    template: "%s | Softlixo",
  },
  description:
    "Independent reviews, comparisons and practical guides for AI tools, productivity software, hosting and online services.",
  openGraph: {
    title: "Softlixo",
    description: "Choose better software with clear, independent reviews.",
    url: "https://softlixo.com",
    siteName: "Softlixo",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <nav className="container nav">
            <Link className="brand" href="/">soft<span>lixo</span></Link>
            <div className="links">
              <Link href="/reviews">Reviews</Link>
              <Link href="/categories">Categories</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <div className="container footer-row">
            <div>© {new Date().getFullYear()} Softlixo</div>
            <div className="footer-links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
