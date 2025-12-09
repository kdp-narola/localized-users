'use client';

import { useTranslations } from 'next-intl';

export default function Error({ translationKey, onRetry }: { translationKey: string; onRetry: () => void }) {
  const t = useTranslations(translationKey);

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] flex items-center justify-center">
      <div className="text-center">
        <div className="text-[var(--error)] text-6xl mb-4">⚠️</div>
        <p className="text-xl text-[var(--error)]">{t('error')}</p>
        <button
          onClick={onRetry}
          className="mt-4 px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-hover)] transition-colors"
        >
          {t("retry")}
        </button>
      </div>
    </div>
  );
}
