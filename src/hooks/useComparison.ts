import { useState, useEffect } from 'react';
import { Comparison } from '../types';

export function useComparison(): Comparison {
  const [ids, setIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('cmp_ids');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('cmp_ids', JSON.stringify(ids));
  }, [ids]);

  const add = (id: string) => {
    setIds((prev) => {
      if (prev.includes(id)) return prev;
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  const remove = (id: string) => {
    setIds((prev) => prev.filter((item) => item !== id));
  };

  const clear = () => {
    setIds([]);
  };

  return { ids, add, remove, clear };
}
