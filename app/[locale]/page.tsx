'use client';

import { useEffect, useMemo } from 'react';
import { useUsersStore } from '@/store/useUsersStore';
import { useTranslations } from 'next-intl';

import Loading from '@/components/shared/Loading';
import Error from '@/components/shared/Error';
import SearchBar from '@/components/shared/SearchBar';
import UsersTable from '@/components/users/ui/UsersTable';
import UsersCard from '@/components/users/ui/UsersCard';
import Pagination from '@/components/shared/Pagination';

export default function Home() {
  const t = useTranslations('users');

  const {
    filteredUsers,
    isLoading,
    error,
    searchQuery,
    currentPage,
    itemsPerPage,
    setSearchQuery,
    setCurrentPage,
    fetchUsers,
  } = useUsersStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = useMemo(() => filteredUsers.slice(startIndex, endIndex), [filteredUsers, startIndex, endIndex]);

  if (isLoading) return <Loading translationKey="users" />;
  if (error) return <Error translationKey="users" onRetry={fetchUsers} />;

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-2 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 text-[var(--text-primary)]">{t('title')}</h1>
          <p className="text-sm sm:text-lg text-[var(--text-secondary)]">{t('subtitle')}</p>
        </div>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {currentUsers.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-[var(--text-tertiary)] text-6xl mb-4">🔍</div>
            <p className="text-xl text-[var(--text-secondary)]">{t('noResults')}</p>
          </div>
        ) : (
          <>
            <UsersTable users={currentUsers} />
            <UsersCard users={currentUsers} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              startIndex={startIndex}
              endIndex={endIndex}
              totalItems={filteredUsers.length}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </main>
    </div>
  );
}
