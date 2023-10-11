import { create } from 'zustand';
import { createBeat, queryBeatsById, updateBeat, deleteBeat, queryBeatById } from './api';
import { Beat, BaseState } from './types';

interface QueryAllBeats extends BaseState {
    beats: Record<number, Beat[]>;
    query: (actId: number) => Promise<void>;
}
export const useBeatsStore = create<QueryAllBeats>((set, get) => ({
    beats: {},
    loading: false,
    error: null,
    query: async (actId) => {
        set({ loading: true });
        try {
            const beats = await queryBeatsById(actId);
            set({ beats: { ...get().beats, [actId]: beats }, loading: false });
        } catch (error) {
            console.log(error);
            set({ error: (error as Error).message, loading: false });
        }
    },
}));

interface QueryBeat extends BaseState {
    beat: Beat | null;
    query: (beatId: number) => Promise<void>;
}
export const useBeatStore = create<QueryBeat>((set) => ({
    beat: null,
    loading: false,
    error: null,
    query: async (beatId) => {
        set({ loading: true });
        try {
            const beat = await queryBeatById(beatId);
            set({ beat, loading: false });
        } catch (error) {
            console.log(error);
            set({ error: (error as Error).message, loading: false });
        }
    },
}));

interface CreateBeat extends BaseState {
    create: (actId: number, data: Partial<Beat>) => Promise<void>;
}
export const useCreateBeatStore = create<CreateBeat>((set) => ({
    loading: false,
    error: null,
    create: async (actId, data) => {
        set({ loading: true });
        console.log(actId, data);
        try {
            await createBeat(actId, data);
            await useBeatsStore.getState().query(actId);
            set({ loading: false });
        } catch (error) {
            console.log(error);
            set({ error: (error as Error).message, loading: false });
        }
    },
}));

interface UpdateBeat extends BaseState {
    update: ({
        beatId,
        actId,
        data,
    }: {
        beatId: number;
        actId: number;
        data: Partial<Beat>;
    }) => Promise<void>;
}
export const useUpdateBeatStore = create<UpdateBeat>((set) => ({
    loading: false,
    error: null,
    update: async ({ beatId, actId, data }) => {
        set({ loading: true });
        try {
            console.log(beatId, data);
            await updateBeat(beatId, data);
            await useBeatsStore.getState().query(actId);
            set({ loading: false });
        } catch (error) {
            console.log(error);
            set({ error: (error as Error).message, loading: false });
        }
    },
}));

interface DeleteBeat extends BaseState {
    remove: ({ actId, beatId }: { actId: number; beatId: number }) => Promise<void>;
}
export const useDeleteBeatStore = create<DeleteBeat>((set) => ({
    loading: false,
    error: null,
    remove: async ({ actId, beatId }) => {
        set({ loading: true });
        try {
            console.log('remove', actId, beatId);
            await deleteBeat(actId, beatId);
            await useBeatsStore.getState().query(actId);
            set({ loading: false });
        } catch (error) {
            console.log(error);
            set({ error: (error as Error).message, loading: false });
        }
    },
}));
