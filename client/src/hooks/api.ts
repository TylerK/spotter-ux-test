import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { query, mutate } from './client';
import { Act } from './types';

/**
 * Get all acts
 */
const queryActs = async (): Promise<Act[]> => {
    const { data } = await query(`/acts`);
    return data;
};
export function useGetActs() {
    return useQuery<Act[], Error>(['ACT'], () => queryActs());
}

/**
 * Get act by id
 */
const queryAct = async (id: string): Promise<Act> => {
    const { data } = await query(`/acts/${id}`);
    return data;
};
export function useGetAct(id: string) {
    return useQuery<Act, Error>(['ACTS', id], () => queryAct(id));
}

/**
 * Create a new act
 */
const createAct = async (name: string) => {
    const { data } = await mutate({ path: '/acts', method: 'POST', body: { name } });
    return data;
};
export function useCreateAct(name: string) {
    const queryClient = useQueryClient();

    return useMutation<Act, Error, Act>(() => createAct(name), {
        onSuccess: () => {
            queryClient.invalidateQueries(['CREATE_ACT', name]);
        },
        onError: (error) => {
            // TODO actual error handling
            console.log(error);
        },
    });
}

/**
 * Delete an existing act
 */
const deleteAct = async (id: string) => {
    const { data } = await mutate({ path: `/acts/${id}`, method: 'DELETE' });
    return data;
};
export function useDeleteAct(name: string) {
    const queryClient = useQueryClient();

    return useMutation<Act, Error, Act>(() => deleteAct(name), {
        onSuccess: () => {
            queryClient.invalidateQueries(['DELETE_ACT', name]);
        },
        onError: (error) => {
            // TODO actual error handling
            console.log(error);
        },
    });
}
