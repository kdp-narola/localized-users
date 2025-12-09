import { create } from 'zustand';
import { User } from '@/types/user';

interface UsersState {
    users: User[];
    filteredUsers: User[];
    isLoading: boolean;
    error: string | null;
    searchQuery: string;
    currentPage: number;
    itemsPerPage: number;

    // Actions
    setUsers: (users: User[]) => void;
    setLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;
    setSearchQuery: (query: string) => void;
    setCurrentPage: (page: number) => void;
    setItemsPerPage: (items: number) => void;
    fetchUsers: () => Promise<void>;
    filterUsers: () => void;
}

export const useUsersStore = create<UsersState>((set, get) => ({
    users: [],
    filteredUsers: [],
    isLoading: false,
    error: null,
    searchQuery: '',
    currentPage: 1,
    itemsPerPage: 5,

    setUsers: (users) => {
        set({ users, filteredUsers: users });
    },

    setLoading: (isLoading) => set({ isLoading }),

    setError: (error) => set({ error }),

    setSearchQuery: (query) => {
        set({ searchQuery: query, currentPage: 1 });
        get().filterUsers();
    },

    setCurrentPage: (page) => set({ currentPage: page }),

    setItemsPerPage: (items) => set({ itemsPerPage: items, currentPage: 1 }),

    fetchUsers: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data: User[] = await response.json();
            get().setUsers(data);
        } catch (error) {
            set({ error: error instanceof Error ? error.message : 'An error occurred' });
        } finally {
            set({ isLoading: false });
        }
    },

    filterUsers: () => {
        const { users, searchQuery } = get();

        if (!searchQuery.trim()) {
            set({ filteredUsers: users });
            return;
        }

        const query = searchQuery.toLowerCase();
        const filtered = users.filter(
            (user) =>
                user.name.toLowerCase().includes(query) ||
                user.email.toLowerCase().includes(query)
        );

        set({ filteredUsers: filtered });
    },
}));
