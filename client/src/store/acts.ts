import { create } from 'zustand';
import { queryActs, createAct, queryActById, deleteAct } from './api';
import { Act, BaseState } from './types';

/**
 * Get all acts
 */
interface ActsSlice extends BaseState {
    acts: Act[];
    query: () => Promise<void>;
}
export const useActsStore = create<ActsSlice>((set) => ({
    acts: [],
    loading: false,
    error: null,
    query: async () => {
        set({ loading: true });
        try {
            const acts = await queryActs();
            set({ acts, loading: false });
        } catch (error) {
            console.log(error);
            set({ error: (error as Error).message, loading: false });
        }
    },
}));

/**
 * Get an act by ID
 */
interface ActSlice extends BaseState {
    query: (actId: number) => Promise<void>;
}
export const useActStore = create<ActSlice>((set) => ({
    acts: [],
    loading: false,
    error: null,
    query: async (actId) => {
        set({ loading: true });
        try {
            await queryActById(actId);
            set({ loading: false });
        } catch (error) {
            console.log(error);
            set({ error: (error as Error).message, loading: false });
        }
    },
}));

/**
 * Create a new act
 */
interface CreateActSlice extends BaseState {
    create: (name: string) => Promise<void>;
}
export const useCreateActStore = create<CreateActSlice>((set) => ({
    loading: false,
    error: null,
    create: async (name) => {
        set({ loading: true });
        try {
            await createAct(name);
            await useActsStore.getState().query();
            set({ loading: false });
        } catch (error) {
            console.log(error);
            set({ error: (error as Error).message, loading: false });
        }
    },
}));

/**
 * Delete an existing act
 */
interface DeleteAct extends BaseState {
    remove: (actId: number) => Promise<void>;
}
export const useDeleteActStore = create<DeleteAct>((set) => ({
    loading: false,
    error: null,
    remove: async (actId) => {
        set({ loading: true });
        try {
            await deleteAct(actId);
            await useActsStore.getState().query();
            set({ loading: false });
        } catch (error) {
            console.log(error);
            set({ error: (error as Error).message, loading: false });
        }
    },
}));
