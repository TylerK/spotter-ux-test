import { useEffect } from 'react';
import { useBeatsStore } from '../../store/acts';
import { colorHex } from '../../utils';
import { AddButton } from '../AddButton';
import { Beat } from './Beat';

/**
 * Due to a limitation with the provided API, a separate call must be made
 * to get the beats for all individual acts. This could get hairy out in the wild.
 */
export function Act({ act, id, title }: { act: number; id: number; title: string }) {
    const { beats, query, loading } = useBeatsStore((state) => state);
    const localBeats = beats[id];

    useEffect(() => {
        query(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = () => {
        console.log('clicked');
    };

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
    const TAILWIND_TEXT_GRAY_400 = '#9ca3af';

    return (
        <div className="flex min-w-[24rem] flex-col">
            <div className="text-sm font-bold uppercase" style={{ color: hex }}>
                Act {act}
            </div>
            <div className="flex items-center justify-between pb-4">
                <h1 className="text-2xl leading-none">{title}</h1>
                <AddButton
                    onClick={handleClick}
                    color={TAILWIND_TEXT_GRAY_400}
                    hoverColor={hex}
                    className="text-gray-400"
                />
            </div>
            <div className="flex flex-col gap-4 pb-6">
                {localBeats?.map((beat) => <Beat key={beat.id} color={hex} beat={beat} />)}
            </div>
        </div>
    );
}
