export const CATEGORY_SLUGS = [
  'sports',
  'education',
  'investment',
  'books',
  'technology',
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

interface CategoryMeta {
  slug: CategorySlug;
  label: string;
  description: string;
  text: string;
  border: string;
}

export const CATEGORIES: Record<CategorySlug, CategoryMeta> = {
  sports: {
    slug: 'sports',
    label: 'Sports',
    description: 'Games, training, and the moments that make them worth watching.',
    text: 'text-orange-700 dark:text-orange-400',
    border: 'border-orange-700 dark:border-orange-400',
  },
  education: {
    slug: 'education',
    label: 'Education',
    description: 'Notes on learning well, teaching better, and lifelong study.',
    text: 'text-indigo-700 dark:text-indigo-400',
    border: 'border-indigo-700 dark:border-indigo-400',
  },
  investment: {
    slug: 'investment',
    label: 'Investment',
    description: 'Markets, money, and thinking clearly about the long run.',
    text: 'text-green-800 dark:text-green-400',
    border: 'border-green-800 dark:border-green-400',
  },
  books: {
    slug: 'books',
    label: 'Books',
    description: 'Reading notes, reviews, and ideas worth holding onto.',
    text: 'text-purple-800 dark:text-purple-400',
    border: 'border-purple-800 dark:border-purple-400',
  },
  technology: {
    slug: 'technology',
    label: 'Technology',
    description: 'Software, tools, and how technology changes the way we work.',
    text: 'text-teal-700 dark:text-teal-400',
    border: 'border-teal-700 dark:border-teal-400',
  },
};

export const CATEGORY_LIST = CATEGORY_SLUGS.map((slug) => CATEGORIES[slug]);
