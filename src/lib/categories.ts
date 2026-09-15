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
  bg: string;
  ring: string;
  dot: string;
}

export const CATEGORIES: Record<CategorySlug, CategoryMeta> = {
  sports: {
    slug: 'sports',
    label: 'Sports',
    description: 'Games, training, and the moments that make them worth watching.',
    text: 'text-amber-700 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950/40',
    ring: 'ring-amber-600/20 dark:ring-amber-400/20',
    dot: 'bg-amber-500',
  },
  education: {
    slug: 'education',
    label: 'Education',
    description: 'Notes on learning well, teaching better, and lifelong study.',
    text: 'text-blue-700 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/40',
    ring: 'ring-blue-600/20 dark:ring-blue-400/20',
    dot: 'bg-blue-500',
  },
  investment: {
    slug: 'investment',
    label: 'Investment',
    description: 'Markets, money, and thinking clearly about the long run.',
    text: 'text-emerald-700 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/40',
    ring: 'ring-emerald-600/20 dark:ring-emerald-400/20',
    dot: 'bg-emerald-500',
  },
  books: {
    slug: 'books',
    label: 'Books',
    description: 'Reading notes, reviews, and ideas worth holding onto.',
    text: 'text-violet-700 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-950/40',
    ring: 'ring-violet-600/20 dark:ring-violet-400/20',
    dot: 'bg-violet-500',
  },
  technology: {
    slug: 'technology',
    label: 'Technology',
    description: 'Software, tools, and how technology changes the way we work.',
    text: 'text-sky-700 dark:text-sky-400',
    bg: 'bg-sky-50 dark:bg-sky-950/40',
    ring: 'ring-sky-600/20 dark:ring-sky-400/20',
    dot: 'bg-sky-500',
  },
};

export const CATEGORY_LIST = CATEGORY_SLUGS.map((slug) => CATEGORIES[slug]);
