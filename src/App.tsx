import { products } from './data/products';
import { useComparison } from './hooks/useComparison';
import { ProductList } from './components/ProductList';
import { CompareTable } from './components/CompareTable';
import './App.css';

export default function App() {
  const { ids, add, remove } = useComparison();

  const handleToggle = (id: string) => {
    if (ids.includes(id)) {
      remove(id);
    } else {
      add(id);
    }
  };

  const selectedProducts = products.filter((p) => ids.includes(p.id));

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Product Comparison</h1>
        <p className="subtitle">Compare laptop specifications side by side (Max 3)</p>
      </header>

      <main className="app-main">
        <ProductList
          products={products}
          selectedIds={ids}
          onToggle={handleToggle}
        />

        <section className="table-section">
          <h2>Specifications Comparison</h2>
          {selectedProducts.length === 0 ? (
            <div className="placeholder-message">
              Select products to compare
            </div>
          ) : (
            <CompareTable products={selectedProducts} onRemove={remove} />
          )}
        </section>
      </main>
    </div>
  );
}
