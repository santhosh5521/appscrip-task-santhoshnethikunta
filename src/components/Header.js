import { useState } from 'react';
import { Search, Heart, ShoppingBag, ChevronDown, Menu } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ['SHOP', 'SKILLS', 'STORIES', 'ABOUT', 'CONTACT US'];

  return (
    <header className="header">
      <div className="header__banner">
        <span>LOREM IPSUM DOLOR</span>
        <span className="header__banner-center">LOREM IPSUM DOLOR</span>
        <span className="header__banner-right">LOREM IPSUM DOLOR</span>
      </div>

      <div className="header__main">
        {/* Left: hamburger (desktop) or hamburger+logo-icon (mobile) */}
        <div className="header__left">
          <button
            className="header__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
          <div className="header__logo-mark" aria-hidden="true" />
        </div>

        <div className="header__logo">
          <span className="header__logo-text">LOGO</span>
        </div>

        <div className="header__icons">
          <Search size={20} aria-label="Search" />
          <Heart size={20} aria-label="Wishlist" />
          <ShoppingBag size={20} aria-label="Cart" />
          <span className="header__lang header__lang--desktop">
            ENG <ChevronDown size={13} />
          </span>
        </div>
      </div>

      <nav className="header__nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link} href="#" className="header__nav-link">{link}</a>
        ))}
      </nav>

      {menuOpen && (
        <nav className="header__mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link} href="#" className="header__mobile-link"
              onClick={() => setMenuOpen(false)}>{link}</a>
          ))}
        </nav>
      )}
    </header>
  );
}