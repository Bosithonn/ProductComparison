import { Product } from '../types';

interface TableProps {
  products: Product[];
  onRemove: (id: string) => void;
}

export function CompareTable({ products, onRemove }: TableProps) {
  if (products.length === 0) return null;

  const specs = [
    { label: 'Brand', key: 'brand' as keyof Product },
    { label: 'Price', key: 'price' as keyof Product, format: (val: string | number) => `$${Number(val).toLocaleString()}` },
    { label: 'CPU', key: 'cpu' as keyof Product },
    { label: 'RAM', key: 'ram' as keyof Product },
    { label: 'Storage', key: 'storage' as keyof Product },
    { label: 'Display', key: 'display' as keyof Product },
    { label: 'GPU', key: 'gpu' as keyof Product },
    { label: 'Weight', key: 'weight' as keyof Product },
    { label: 'Battery', key: 'battery' as keyof Product },
    { label: 'OS', key: 'os' as keyof Product }
  ];

  const hasDiff = (key: keyof Product) => {
    if (products.length <= 1) return false;
    const first = products[0][key];
    return !products.every((p) => p[key] === first);
  };

  return (
    <div className="compare-container">
      <table className="compare-table">
        <thead>
          <tr>
            <th>Specification</th>
            {products.map((p) => (
              <th key={p.id} className="product-header-cell">
                <div className="table-header-content">
                  <span className="table-brand">{p.brand}</span>
                  <div className="table-name">{p.name}</div>
                  <button onClick={() => onRemove(p.id)} className="remove-btn">
                    Remove
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {specs.map((spec) => {
            const highlight = hasDiff(spec.key);
            return (
              <tr key={spec.key} className={highlight ? 'diff-row' : ''}>
                <td className="spec-label">{spec.label}</td>
                {products.map((p) => {
                  const val = p[spec.key];
                  return (
                    <td key={p.id} className="spec-value">
                      {spec.format ? spec.format(val) : val}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
