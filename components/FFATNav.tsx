'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface Theme {
  colors: {
    accent: string;
    active: string;
  };
}

export function FFATNav({ theme }: { theme: Theme }) {
  const pathname = usePathname();
  const t = useTranslations('common');

  const isActive = (path: string) => pathname === path ? 'text-white font-bold' : 'text-gray-400';

  return (
    <nav className="w-full flex justify-around py-4" style={{ backgroundColor: theme.colors.accent }}>
      <Link href="/frequency/global" className={isActive('/frequency/global')}>
        {t('ffat.frequency1')}
      </Link>
      <Link href="/frequency/local" className={isActive('/frequency/local')}>
        {t('ffat.frequency2')}
      </Link>
      <Link href="/amplitude" className={isActive('/amplitude')}>
        {t('ffat.amplitude')}
      </Link>
      <Link href="/profile" className={isActive('/profile')}>
        {t('ffat.traegheit')}
      </Link>
    </nav>
  );
}
