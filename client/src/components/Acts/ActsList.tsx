import { useEffect } from 'react';
import { useActsStore } from '../../store/acts';

export function ActsList() {
    const { acts, query, loading, error } = useActsStore((state) => state);

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
        <div>
            {acts.map((act) => (
                <div key={act.id}>{act.name}</div>
            ))}
        </div>
    );
}
