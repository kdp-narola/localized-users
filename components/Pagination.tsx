'use client';

import { useTranslations } from 'next-intl';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  startIndex,
  endIndex,
  totalItems,
  onPageChange,
}: PaginationProps) {
  const tPagination = useTranslations('users.pagination');

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="bg-[var(--bg-secondary)] px-6 py-4 border-t border-[var(--border-primary)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs sm:text-sm text-[var(--text-secondary)]">
          {tPagination('showing')} <span className="font-semibold">{startIndex + 1}</span> {tPagination('to')}{' '}
          <span className="font-semibold">{Math.min(endIndex, totalItems)}</span> {tPagination('of')}{' '}
          <span className="font-semibold">{totalItems}</span> {tPagination('users')}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`text-sm md:text-md px-4 py-2 rounded-lg font-medium transition-all ${
              currentPage === 1
                ? 'bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] cursor-not-allowed'
                : 'bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-tertiary)]'
            }`}
          >
            {tPagination('previous')}
          </button>

          <div className="hidden sm:flex gap-2">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === page
                    ? 'bg-[var(--primary)] text-white shadow-[var(--shadow-md)]'
                    : 'bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-tertiary)]'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`text-sm md:text-md px-4 py-2 rounded-lg font-medium transition-all ${
              currentPage === totalPages
                ? 'bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] cursor-not-allowed'
                : 'bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-tertiary)]'
            }`}
          >
            {tPagination('next')}
          </button>
        </div>
      </div>
    </div>
  );
}
