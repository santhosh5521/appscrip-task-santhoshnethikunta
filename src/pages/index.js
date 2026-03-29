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
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/" className="breadcrumb__link">HOME</a>
          <span className="breadcrumb__sep"> &gt; </span>
          <span className="breadcrumb__current">SHOP</span>
        </nav>

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

export async function getStaticProps() {
  const fallbackProducts = [
    { id: 1, title: 'Recycled Backpack', price: 109.95, category: "men's clothing", image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400' },
    { id: 2, title: 'Casual Dress', price: 22.3, category: "women's clothing", image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400' },
    { id: 3, title: 'Cotton T-Shirt', price: 55.99, category: "men's clothing", image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400' },
    { id: 4, title: 'Gold Bracelet', price: 695, category: 'jewelery', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400' },
    { id: 5, title: 'Leather Handbag', price: 109.95, category: "women's clothing", image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400' },
    { id: 6, title: 'Mens Casual Slim Fit', price: 15.99, category: "men's clothing", image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400' },
    { id: 7, title: 'Silver Earrings', price: 10.99, category: 'jewelery', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400' },
    { id: 8, title: 'Summer Floral Dress', price: 168, category: "women's clothing", image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400' },
    { id: 9, title: 'Diamond Ring', price: 9.99, category: 'jewelery', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400' },
    { id: 10, title: 'Sports Jacket', price: 7.95, category: "men's clothing", image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400' },
    { id: 11, title: 'Womens Blouse', price: 9.85, category: "women's clothing", image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400' },
    { id: 12, title: 'Canvas Tote Bag', price: 22.3, category: "women's clothing", image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400' },
  ];

  try {
    const res = await fetch('https://fakestoreapi.com/products?limit=12', {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error('API failed');
    const products = await res.json();
    const validProducts = Array.isArray(products) && products.length > 0
      ? products
      : fallbackProducts;
    return { props: { products: validProducts }, revalidate: 60 };
  } catch {
    return { props: { products: fallbackProducts }, revalidate: 60 };
  }
}
