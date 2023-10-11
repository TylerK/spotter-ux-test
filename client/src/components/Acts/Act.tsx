import { useEffect } from 'react';
import { useBeatsStore } from '../../store/beats';
import { colorHex } from '../../utils';
import { Beat } from './Beat';
import { ActMenu } from './Menu';
import { useSheetStore, SHEETS } from '../../store/sheets';

/**
 * Due to a limitation with the provided API, a separate call must be made
 * to get the beats for all individual acts. This could get hairy out in the wild.
 */
export function Act({ act, id, title }: { act: number; id: number; title: string }) {
    const { open } = useSheetStore((state) => state);
    const { beats, query, loading } = useBeatsStore((state) => state);
    const actBeats = beats[id];

    useEffect(() => {
        query(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return (
            <div className="flex min-w-[24rem] flex-col">
                <div className="flex flex-col gap-4">
                    <section className="h-72 animate-pulse bg-gray-300"></section>
                    <section className="h-72 animate-pulse bg-gray-300"></section>
                    <section className="h-72 animate-pulse bg-gray-300"></section>
                </div>
            </div>
        );
    }

    const hex = colorHex(id);

    return (
        <div className="flex min-w-[24rem] flex-col">
            <div className="text-sm font-bold uppercase" style={{ color: hex }}>
                Act {act}
            </div>
            <div className="flex items-center justify-between pb-4">
                <h1 className="text-2xl leading-none">{title}</h1>
                <ActMenu id={id} />
            </div>
            <div className="flex flex-col gap-4 pb-6">
                {actBeats
                    ?.sort((a, b) => a.id - b.id)
                    .map((beat) => (
                        <button
                            key={beat.id}
                            onClick={() =>
                                open({ sheet: SHEETS.UPDATE_BEAT, actId: id, beatId: beat.id })
                            }
                        >
                            <Beat color={hex} beat={beat} />
                        </button>
                    ))}
            </div>
        </div>
    );
}
