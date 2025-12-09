'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
    const t = useTranslations('header');

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-primary)]/80 border-b border-[var(--border-primary)] shadow-[var(--shadow-sm)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <h1 className="text-xl sm:text-3xl font-bold text-[var(--primary)]">
                        {t('title')}
                    </h1>
                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
}

