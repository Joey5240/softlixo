"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="mobile-nav">
        <Link href="/" className="mobile-brand" onClick={closeMenu}>
          softlixo
        </Link>

        <button
          type="button"
          className={`mobile-menu-button ${open ? "is-open" : ""}`}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          <span>{open ? "CLOSE" : "MENU"}</span>

          <div className="mobile-menu-icon" aria-hidden="true">
            <i />
            <i />
          </div>
        </button>
      </div>

      <div className={`mobile-menu-panel ${open ? "is-open" : ""}`}>
        <div className="mobile-menu-glow mobile-menu-glow-a" />
        <div className="mobile-menu-glow mobile-menu-glow-b" />

        <nav className="mobile-menu-links">
          <Link href="/reviews" onClick={closeMenu}>
            <span>01</span>
            <strong>Reviews</strong>
            <i>↗</i>
          </Link>

          <Link href="/categories" onClick={closeMenu}>
            <span>02</span>
            <strong>Categories</strong>
            <i>↗</i>
          </Link>

          <Link href="/about" onClick={closeMenu}>
            <span>03</span>
            <strong>About</strong>
            <i>↗</i>
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            <span>04</span>
            <strong>Contact</strong>
            <i>↗</i>
          </Link>
        </nav>

        <div className="mobile-menu-footer">
          <span>Independent software guidance</span>
          <strong>Choose better software.</strong>
        </div>
      </div>
    </>
  );
}
