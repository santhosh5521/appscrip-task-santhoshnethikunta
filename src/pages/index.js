import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

export default function Home({ products }) {
  const [showFilters, setShowFilters] = useState(true);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');
  const [sortOpen, setSortOpen] = useState(false);

  const sortOptions = [
    { value: 'recommended', label: 'RECOMMENDED' },
    { value: 'newest', label: 'NEWEST FIRST' },
    { value: 'popular', label: 'POPULAR' },
    { value: 'price-high', label: 'PRICE - HIGH TO LOW' },
    { value: 'price-low', label: 'PRICE - LOW TO HIGH' },
  ];

  const getSortedProducts = () => {
    const list = [...products];
    if (sortBy === 'newest') return list.reverse();
    if (sortBy === 'price-high') return list.sort((a, b) => b.price - a.price);
    if (sortBy === 'price-low') return list.sort((a, b) => a.price - b.price);
    return list;
  };

  const currentLabel = sortOptions.find(o => o.value === sortBy)?.label;

  return (
    <>
      <Head>
        <title>Discover Our Products – mettā muse</title>
      </Head>

      <Header />

      <main className="main">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/" className="breadcrumb__link">HOME</a>
          <span className="breadcrumb__sep"> &gt; </span>
          <span className="breadcrumb__current">SHOP</span>
        </nav>

        {/* Hero */}
        <section className="hero">
          <h1 className="hero__title">DISCOVER OUR PRODUCTS</h1>
          <p className="hero__subtitle">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
            Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </section>

        {/* Desktop Toolbar */}
        <div className="toolbar">
          <div className="toolbar__left">
            <span className="toolbar__count">3425 ITEMS</span>
            <button className="toolbar__toggle" onClick={() => setShowFilters(!showFilters)}>
              {showFilters ? '← HIDE FILTER' : '→ SHOW FILTER'}
            </button>
          </div>
          <div className="sort-dropdown">
            <button
              className="sort-dropdown__btn"
              onClick={() => setSortOpen(!sortOpen)}
              aria-expanded={sortOpen}
            >
              {currentLabel}
              <span className="sort-dropdown__arrow">↓</span>
            </button>
            {sortOpen && (
              <ul className="sort-dropdown__menu" role="listbox">
                {sortOptions.map((opt) => (
                  <li key={opt.value}>
                    <button
                      className={`sort-dropdown__option ${sortBy === opt.value ? 'sort-dropdown__option--active' : ''}`}
                      onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    >
                      {sortBy === opt.value && <span className="sort-dropdown__check">✓</span>}
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Toolbar */}
        <div className="toolbar-mobile">
          <button className="toolbar-mobile__btn" onClick={() => setShowMobileFilter(true)}>
            FILTER
          </button>
          <div className="toolbar-mobile__divider" />
          <div className="sort-dropdown sort-dropdown--mobile">
            <button className="sort-dropdown__btn" onClick={() => setSortOpen(!sortOpen)}>
              RECOMMENDED <span className="sort-dropdown__arrow">↓</span>
            </button>
            {sortOpen && (
              <ul className="sort-dropdown__menu">
                {sortOptions.map((opt) => (
                  <li key={opt.value}>
                    <button
                      className={`sort-dropdown__option ${sortBy === opt.value ? 'sort-dropdown__option--active' : ''}`}
                      onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    >
                      {sortBy === opt.value && <span className="sort-dropdown__check">✓</span>}
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Filter Overlay */}
        {showMobileFilter && (
          <div className="filter-overlay">
            <div className="filter-overlay__sheet">
              <div className="filter-overlay__header">
                <span className="filter-overlay__title">FILTERS</span>
                <button onClick={() => setShowMobileFilter(false)} className="filter-overlay__close">✕</button>
              </div>
              <div className="filter-overlay__body">
                <Sidebar />
              </div>
              <div className="filter-overlay__footer">
                <button className="filter-overlay__apply" onClick={() => setShowMobileFilter(false)}>
                  APPLY
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Shop Layout */}
        <div className="shop-layout">
          {showFilters && (
            <div className="sidebar-wrapper">
              <Sidebar />
            </div>
          )}
          <ProductGrid products={getSortedProducts()} showFilters={showFilters} />
        </div>
      </main>

      <Footer />
    </>
  );
}

// Changed to getStaticProps — works reliably on Netlify
export async function getStaticProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products?limit=12');
    const products = await res.json();
    return {
      props: { products },
      revalidate: 60, // ISR — refreshes every 60 seconds
    };
  } catch {
    return {
      props: { products: [] },
      revalidate: 60,
    };
  }
}
