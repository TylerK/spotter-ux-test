import { MutableRefObject, useEffect, useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

import { useActsStore } from '../../store/acts';
import { Act } from './Act';

export function ActsList() {
    const { acts, query, loading, error } = useActsStore((state) => state);
    const ref = useRef<HTMLDivElement>(null);
    const { events } = useDraggable(ref as MutableRefObject<HTMLElement>); // Casting here to quiet the library down

    useEffect(() => {
        query();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>There was an error querying acts</div>;
    }

    return (
        <div className="scrollbar-hide flex gap-6 overflow-x-scroll" ref={ref} {...events}>
            {acts.map((act, i) => (
                <Act key={act.id} act={i + 1} id={act.id} title={act.name} />
            ))}
        </div>
    );
}
