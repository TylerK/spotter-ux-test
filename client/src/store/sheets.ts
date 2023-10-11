import { create } from 'zustand';

export const SHEETS = {
    CREATE_ACT: 'add-new-act',
    UPDATE_ACT: 'update-act',
    CREATE_BEAT: 'create-beat',
    UPDATE_BEAT: 'update-beat',
} as const;

type SheetName = (typeof SHEETS)[keyof typeof SHEETS];

type Sheets = {
    actId: number;
    beatId: number;
    sheet: SheetName | null;
    open: ({ sheet, actId, beatId }: { sheet: SheetName; actId?: number; beatId?: number }) => void;
    close: () => void;
};

export const useSheetStore = create<Sheets>((set) => ({
    sheet: null,
    actId: -1,
    beatId: -1,
    open: ({ sheet, actId, beatId }) => set({ sheet, actId, beatId }),
    close: () => set({ sheet: null }),
}));
