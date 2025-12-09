'use client';

import { useTranslations } from 'next-intl';

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const t = useTranslations('users');

  return (
    <div className="mb-2 sm:mb-6">
      <div className="relative max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-4 sm:h-5 w-4 sm:w-5 text-[var(--text-tertiary)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t('searchPlaceholder')}
          className="placeholder:text-sm block w-full pl-8 sm:pl-10 pr-3 py-2 sm:py-3 border border-[var(--border-primary)] rounded-lg leading-5 bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
        />
      </div>
    </div>
  );
}
