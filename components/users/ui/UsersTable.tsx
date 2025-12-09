'use client';

import { User } from '@/types/user';
import { useTranslations } from 'next-intl';

export default function UsersTable({ users }: { users: User[] }) {
  const tTable = useTranslations('users.table');

  return (
    <div className="hidden md:block overflow-x-auto">
      <table className="min-w-full divide-y divide-[var(--border-primary)]">
        <thead className="bg-[var(--primary)]">
          <tr>
            {['name', 'username', 'email', 'phone', 'company', 'city'].map((key) => (
              <th
                key={key}
                className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider"
              >
                {tTable(key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border-primary)]">
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={`transition-colors hover:bg-[var(--bg-tertiary)] ${
                index % 2 === 0 ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-secondary)]'
              }`}
            >
              <td className="px-6 py-4 whitespace-nowrap flex items-center">
                <div className="flex-shrink-0 h-10 w-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                  {user.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-[var(--text-primary)]">{user.name}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary)]">@{user.username}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--primary)]">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary)]">{user.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary)]">{user.company.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary)]">{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
