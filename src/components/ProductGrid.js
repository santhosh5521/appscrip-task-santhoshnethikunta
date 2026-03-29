import { useState } from 'react';
import { Heart } from 'lucide-react';

export default function ProductGrid({ products, showFilters }) {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section
      className={`product-grid ${showFilters ? 'product-grid--with-sidebar' : 'product-grid--full'}`}
      aria-label="Product listing"
    >
      {products.map((product, idx) => (
        <article key={product.id} className="product-card">
          <div className="product-card__image-wrap">
            <img
              src={product.image}
              alt={`${product.title} - artisan product at mettā muse`}
              className="product-card__image"
              loading={idx < 4 ? 'eager' : 'lazy'}
            />
            {idx === 0 && (
              <span className="product-card__badge product-card__badge--new">
                NEW
              </span>
            )}
            {idx === 2 && (
              <div className="product-card__out-of-stock">OUT OF STOCK</div>
            )}
          </div>

          <div className="product-card__info">
            <div className="product-card__text">
              <h2 className="product-card__name">{product.title}</h2>
              <p className="product-card__price">
                Sign in or create an account to see pricing
              </p>
            </div>
            <button
              className="product-card__wishlist"
              onClick={() => toggleWishlist(product.id)}
              aria-label={`Add ${product.title} to wishlist`}
            >
              <Heart
                size={18}
                fill={wishlist.includes(product.id) ? '#e53e3e' : 'none'}
                color={wishlist.includes(product.id) ? '#e53e3e' : '#888'}
              />
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}