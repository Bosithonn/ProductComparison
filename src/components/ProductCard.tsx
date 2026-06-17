import { Product } from '../types';

interface CardProps {
  key?: string;
  product: Product;
  selected: boolean;
  onToggle: () => void;
}

export function ProductCard({ product, selected, onToggle }: CardProps) {
  return (
    <div className="product-card">
      <div className="card-header">
        <span className="brand-tag">{product.brand}</span>
        <h3 className="product-name">{product.name}</h3>
      </div>
      <div className="card-body">
        <p className="product-price">${product.price.toLocaleString()}</p>
        <div className="product-brief">
          <span>{product.cpu}</span>
          <span>{product.ram} / {product.storage}</span>
        </div>
      </div>
      <div className="card-footer">
        <button
          onClick={onToggle}
          className={`compare-btn ${selected ? 'selected' : ''}`}
        >
          {selected ? 'Remove' : 'Add to compare'}
        </button>
      </div>
    </div>
  );
}
