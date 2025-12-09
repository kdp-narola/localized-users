'use client';

import { useTranslations } from 'next-intl';

export default function Loading({ translationKey }: { translationKey: string }) {
  const t = useTranslations(translationKey);

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[var(--primary)]"></div>
        <p className="mt-4 text-xl text-[var(--text-secondary)]">{t('loading')}</p>
      </div>
    </div>
  );
}
