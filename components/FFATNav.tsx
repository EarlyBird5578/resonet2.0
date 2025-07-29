'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

type FFATItem = {
  path: string;
  labelKey: string;
};

const navItems: FFATItem[] = [
  { path: '/frequency/global', labelKey: 'ffat.frequency1' },
  { path: '/frequency/local', labelKey: 'ffat.frequency2' },
  { path: '/amplitude', labelKey: 'ffat.amplitude' },
  { path: '/profile', labelKey: 'ffat.traegheit' },
];

export function FFATNav({ theme }: { theme: { colors: { accent: string; active: string } } }) {
  const pathname = usePathname();
  const t = useTranslations('common');

  return (
    <nav
      className="w-full flex justify-around py-4 transition-all duration-300"
      style={{ backgroundColor: theme.colors.accent }}
    >
      {navItems.map(({ path, labelKey }) => (
        <Link
          key={path}
          href={path}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${
            pathname === path ? 'font-bold text-white' : 'text-gray-300 hover:text-white'
          }`}
        >
          {t(labelKey)}
        </Link>
      ))}
    </nav>
  );
}
