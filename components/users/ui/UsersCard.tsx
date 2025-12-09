'use client';

import { User } from '@/types/user';
import { useTranslations } from 'next-intl';

export default function UsersCard({ users }: { users: User[] }) {
  const tTable = useTranslations('users.table');

  return (
    <div className="md:hidden divide-y divide-[var(--border-primary)]">
      {users.map((user) => (
        <div key={user.id} className="py-4 sm:p-6 hover:bg-[var(--bg-tertiary)] transition-colors">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 h-8 sm:h-12 w-8 sm:w-12 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold text-md sm:text-lg">
              {user.name.charAt(0)}
            </div>
            <div className="ml-4">
              <div className="text-md sm:text-lg font-semibold text-[var(--text-primary)]">{user.name}</div>
              <div className="text-xs sm:text-sm text-[var(--text-tertiary)]">@{user.username}</div>
            </div>
          </div>
          <div className="space-y-2">
            {['email', 'phone', 'company', 'city'].map((key) => (
              <div key={key} className="flex items-center text-xs sm:text-sm">
                <span className="font-medium text-[var(--text-secondary)] w-24">{tTable(key)}:</span>
                <span className="text-[var(--primary)]">{(user as any)[key]?.name || (user as any)[key]}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
