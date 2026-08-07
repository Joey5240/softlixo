import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WDD0NJ51SL"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WDD0NJ51SL');
          `}
        </Script>

        <header>
          <div className="nav">
            <Link href="/" className="brand">
              softlixo
            </Link>

            <nav>
              <Link href="/reviews">Reviews</Link>
              <Link href="/categories">Categories</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="footer-inner">
            <p>© {new Date().getFullYear()} Softlixo</p>

            <nav>
              <Link href="/privacy">Privacy</Link>
              <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
