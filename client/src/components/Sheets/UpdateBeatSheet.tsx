import * as Sheet from './Sheet';
import { useSheetStore } from '../../store/sheets';
import { useUpdateBeatStore, useBeatStore, useDeleteBeatStore } from '../../store/beats';
import { BeatForm } from './BeatForm';
import { useEffect } from 'react';
import { Beat } from '../../store/types';

export function UpdateBeatSheet() {
    const { beatId, actId, close } = useSheetStore((state) => state);
    const { query, beat, loading: beatLoading } = useBeatStore((state) => state);
    const { update, loading } = useUpdateBeatStore((state) => state);
    const { remove } = useDeleteBeatStore((state) => state);

    useEffect(() => {
        query(beatId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        await update({
            beatId,
            actId,
            data: {
                name: formData.get('name') as string,
                time: formData.get('time') as string,
                cameraAngle: formData.get('camera_angle') as string,
                content: formData.get('content') as string,
                notes: formData.get('notes') as string,
            },
        });

        close();
    };

    const handleDelete = async () => {
        console.log('handleDelete', actId, beatId);
        await remove({ actId, beatId });
        close();
    };

    if (beatLoading) {
        // TODO Ghost loading would go here
        return null;
    }

    return (
        <Sheet.Root open={true} onOpenChange={close}>
            <Sheet.Portal>
                <Sheet.Overlay />
                <Sheet.Content className="overflow-y-scroll">
                    <BeatForm
                        title="Update Beat"
                        loading={loading}
                        handleSubmit={handleSubmit}
                        data={beat as Beat}
                    />
                    <div className="max-w-xl py-6">
                        <button
                            className="w-full bg-red-500 p-3 text-center text-white"
                            onClick={() => handleDelete()}
                        >
                            Delete
                        </button>
                    </div>
                </Sheet.Content>
            </Sheet.Portal>
        </Sheet.Root>
    );
}
