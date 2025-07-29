'use client';

import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center gap-6">
      <h1 className="text-4xl font-bold">{t('welcome')}</h1>
      <p className="text-lg max-w-xl">{t('intro')}</p>
    </section>
  );
}
