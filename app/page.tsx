'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center gap-10 py-10 px-4">
      <h1 className="text-5xl font-bold">{t('title')}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mt-10">
        <Link href="/knowledge" className="ffat-block">
          <Image src="/icons/knowledge.svg" alt="Wissen" width={64} height={64} />
          <span>{t('knowledge')}</span>
        </Link>
        <Link href="/resonance-test" className="ffat-block">
          <Image src="/icons/resonance.svg" alt="Resonanztest" width={64} height={64} />
          <span>{t('resonanceTest')}</span>
        </Link>
        <Link href="/spaces" className="ffat-block">
          <Image src="/icons/spaces.svg" alt="Räume" width={64} height={64} />
          <span>{t('resonanceSpaces')}</span>
        </Link>
        <Link href="/impulse" className="ffat-block">
          <Image src="/icons/impulse.svg" alt="Impuls" width={64} height={64} />
          <span>{t('lifeImpulse')}</span>
        </Link>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="bg-white/20 p-6 rounded-xl shadow-md text-xl italic">
          {t('question')}
        </div>
        <div className="bg-white/10 p-6 rounded-xl shadow-md text-xl">
          “{t('novaQuote')}”
        </div>
      </div>
    </section>
  );
}
