import { categories } from '@/data/categories';

export function generateStaticParams() {
  const allCategories = [];
  categories.forEach(c => {
    allCategories.push(c);
    if (c.children) {
      allCategories.push(...c.children);
    }
  });

  return allCategories.map((c) => ({
    category: c.slug,
  }));
}

export default function CategoryLayout({ children }) {
  return <>{children}</>;
}
