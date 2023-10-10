import { query, mutate } from './client';
import { Act, Beat } from './types';

/**
 * Get all acts
 */
export const queryActs = async (): Promise<Act[]> => {
    const { data } = await query(`/acts`);
    return data;
};

/**
 * Get act by id
 */
export const queryActById = async (id: string): Promise<Act> => {
    const { data } = await query(`/acts/${id}`);
    return data;
};

/**
 * Create a new act
 */
export const createAct = async (name: string) => {
    const { data } = await mutate({ path: '/acts', method: 'POST', body: { name } });
    return data;
};

/**
 * Delete an existing act
 */
export const deleteAct = async (id: string) => {
    const { data } = await mutate({ path: `/acts/${id}`, method: 'DELETE' });
    return data;
};

/**
 * Get beats by act id
 */
export const queryBeatsById = async (id: number): Promise<Beat[]> => {
    const { data } = await query(`/acts/${id}/beats`);
    return data;
};
