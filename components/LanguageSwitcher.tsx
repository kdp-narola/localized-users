'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const handleLanguageChange = (newLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => handleLanguageChange('en')}
                disabled={isPending}
                className={`text-sm sm:text-md px-4 py-2 rounded-lg font-medium transition-all duration-300 ${locale === 'en'
                        ? 'bg-blue-600 text-white scale-105'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    } ${isPending ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            >
                EN
            </button>
            <button
                onClick={() => handleLanguageChange('fr')}
                disabled={isPending}
                className={`text-sm sm:text-md px-4 py-2 rounded-lg font-medium transition-all duration-300 ${locale === 'fr'
                        ? 'bg-blue-600 text-white scale-105'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    } ${isPending ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            >
                FR
            </button>
        </div>
    );
}
