import { query, mutate } from './client';
import { Act, Beat } from './types';

/**
 * Get all acts
 */
export const queryActs = async (): Promise<Act[]> => {
    const { data } = await query(`acts`);
    return data;
};

/**
 * Get act by id
 */
export const queryActById = async (actId: number): Promise<Act> => {
    const { data } = await query(`acts/${actId}`);
    return data;
};

/**
 * Create a new act
 */
export const createAct = async (name: string) => {
    const { data } = await mutate({ path: 'acts', method: 'POST', body: { name } });
    return data;
};

/**
 * Delete an existing act
 */
export const deleteAct = async (actId: number) => {
    const { data } = await mutate({ path: `acts/${actId}`, method: 'DELETE' });
    return data;
};

/**
 * Get all beats by act id
 */
export const queryBeatsById = async (actId: number): Promise<Beat[]> => {
    const { data } = await query(`acts/${actId}/beats`);
    return data;
};

/**
 * Get a single beat by beat id
 */
export const queryBeatById = async (beatId: number): Promise<Beat> => {
    const { data } = await query(`beats/${beatId}`);
    return data;
};

/**
 * Create a new beat in an act
 */
export const createBeat = async (actId: number, beat: Partial<Beat>) => {
    const { data } = await mutate<Partial<Beat>>({
        path: `acts/${actId}/beats`,
        method: 'POST',
        body: beat,
    });
    return data;
};

/**
 * Update a new beat in an act
 */
export const updateBeat = async (beatId: number, beat: Partial<Beat>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...rest } = beat;
    const { data } = await mutate<Partial<Beat>>({
        path: `acts/beats/${beatId}`,
        method: 'PUT',
        body: rest,
    });

    return data;
};

/**
 * Delete an existing beat from an act
 */
export const deleteBeat = async (actId: number, beatId: number) => {
    console.log('deleteBeat', actId, beatId);

    const { data } = await mutate({
        path: `acts/${actId}/beats/${beatId}`,
        method: 'DELETE',
        body: {},
    });
    return data;
};
