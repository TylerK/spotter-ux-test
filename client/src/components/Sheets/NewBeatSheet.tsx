import * as Sheet from './Sheet';
import { useSheetStore } from '../../store/sheets';
import { useCreateBeatStore } from '../../store/beats';
import { BeatForm } from './BeatForm';

export function NewBeatSheet() {
    const { actId, close } = useSheetStore((state) => state);
    const { create, loading } = useCreateBeatStore((state) => state);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        await create(actId, {
            name: formData.get('name') as string,
            time: formData.get('time') as string,
            cameraAngle: formData.get('camera_angle') as string,
            content: formData.get('content') as string,
            notes: formData.get('notes') as string,
        });

        close();
    };

    return (
        <Sheet.Root open={true} onOpenChange={close}>
            <Sheet.Portal>
                <Sheet.Overlay />
                <Sheet.Content className="overflow-y-scroll">
                    <BeatForm title="Create Beat" loading={loading} handleSubmit={handleSubmit} />
                </Sheet.Content>
            </Sheet.Portal>
        </Sheet.Root>
    );
}
