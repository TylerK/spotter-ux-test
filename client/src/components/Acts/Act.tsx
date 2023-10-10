import { useEffect } from 'react';
import { useBeatsStore } from '../../store/acts';
import { colorHex } from '../../utils';
import { AddButton } from '../AddButton';

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
            <div className="flex flex-col gap-4">
                {localBeats?.map((beat) => (
                    <section
                        key={beat.id}
                        className="flex flex-col gap-4 p-4 text-white"
                        style={{ background: hex }}
                    >
                        <header>
                            <h5 className="opacity-60">({beat.time})</h5>
                            <h3 className="text-2xl font-bold">{beat.name}</h3>
                        </header>
                        <article>
                            <p>{beat.content}</p>
                            <div className="inline-flex items-baseline gap-2 py-4 opacity-80">
                                <svg
                                    width="7"
                                    height="10"
                                    viewBox="0 0 7 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.50504 5.0005L0.676605 2.17203L2.09085 0.757812L6.33345 5.0005L2.09085 9.2431L0.676605 7.8289L3.50504 5.0005Z"
                                        fill="currentColor"
                                    />
                                </svg>

                                <em>{beat.notes}</em>
                            </div>
                        </article>
                        <footer>
                            <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2">
                                <svg
                                    width="18"
                                    height="19"
                                    viewBox="0 0 18 19"
                                    className="inline"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 3.5C12.4142 3.5 12.75 3.83579 12.75 4.25V7.4L16.66 4.66303C16.8296 4.54426 17.0635 4.58553 17.1822 4.7552C17.2263 4.81823 17.25 4.89331 17.25 4.97025V14.0298C17.25 14.2368 17.0821 14.4048 16.875 14.4048C16.798 14.4048 16.723 14.3811 16.66 14.337L12.75 11.6V14.75C12.75 15.1642 12.4142 15.5 12 15.5H1.5C1.08579 15.5 0.75 15.1642 0.75 14.75V4.25C0.75 3.83579 1.08579 3.5 1.5 3.5H12ZM11.25 5H2.25V14H11.25V5ZM6 6.5H7.5V8.75H9.75V10.25H7.49925L7.5 12.5H6L5.99925 10.25H3.75V8.75H6V6.5ZM15.75 7.13098L12.75 9.23075V9.76925L15.75 11.869V7.13098Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <strong>{beat.cameraAngle}</strong>
                            </div>
                        </footer>
                    </section>
                ))}
            </div>
        </div>
    );
}
