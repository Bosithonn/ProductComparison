import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ListProps {
  products: Product[];
  selectedIds: string[];
  onToggle: (id: string) => void;
}

export function ProductList({ products, selectedIds, onToggle }: ListProps) {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          selected={selectedIds.includes(p.id)}
          onToggle={() => onToggle(p.id)}
        />
      ))}
    </div>
  );
}
