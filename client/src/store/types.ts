export type Act = {
    id: number;
    name: string;
};

export type Beat = {
    id: number;
    name: string;
    time: string;
    content: string;
    cameraAngle: string;
    notes: string;
};

export interface BaseState {
    loading: boolean;
    error: string | null;
}
