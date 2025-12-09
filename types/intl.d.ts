import type { AbstractIntlMessages } from 'next-intl';

declare global {
    // Use type safe message keys with `next-intl`
    interface IntlMessages extends AbstractIntlMessages {
        header: {
            title: string;
            language: string;
            home: string;
            users: string;
        };
        home: {
            welcome: string;
            description: string;
            currentLanguage: string;
            features: {
                title: string;
                feature1: string;
                feature2: string;
                feature3: string;
                feature4: string;
            };
            instructions: string;
            viewUsers: string;
        };
        users: {
            title: string;
            subtitle: string;
            search: string;
            searchPlaceholder: string;
            table: {
                name: string;
                username: string;
                email: string;
                phone: string;
                company: string;
                city: string;
            };
            pagination: {
                showing: string;
                to: string;
                of: string;
                users: string;
                previous: string;
                next: string;
            };
            loading: string;
            error: string;
            noResults: string;
            backToHome: string;
        };
    }
}

