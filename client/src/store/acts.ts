import { create } from 'zustand';
import { queryActs, createAct, queryBeatsById } from './api';
import { Act, Beat } from './types';

interface BaseState {
    loading: boolean;
    error: string | null;
}

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
            set({ error: (error as Error).message, loading: false });
        }
    },
}));

interface BeatsSlice extends BaseState {
    beats: Record<number, Beat[]>;
    query: (id: number) => Promise<void>;
}

export const useBeatsStore = create<BeatsSlice>((set, get) => ({
    beats: {},
    loading: false,
    error: null,
    query: async (id) => {
        set({ loading: true });
        try {
            const beats = await queryBeatsById(id);
            set({ beats: { ...get().beats, [id]: beats }, loading: false });
        } catch (error) {
            set({ error: (error as Error).message, loading: false });
        }
    },
}));

interface CreateActSlice extends BaseState {
    create: (name: string) => Promise<void>;
}

export const useCreateActStore = create<CreateActSlice>((set) => ({
    loading: false,
    error: null,
    create: async (name) => {
        set({ loading: true });
        try {
            // Instead of two calls here we could set the new act in local state and call it a day
            // Going with this for the sake of brevity for the time being.
            await createAct(name);
            await useActsStore.getState().query();
            set({ loading: false });
        } catch (error) {
            set({ error: (error as Error).message, loading: false });
        }
    },
}));
