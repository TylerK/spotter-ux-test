import * as Sheet from './Sheet';
import { useCreateActStore } from '../../store/acts';
import { useSheetStore } from '../../store/sheets';
import { ActForm } from './ActForm';

export function NewActSheet() {
    const { close } = useSheetStore((state) => state);
    const { create, loading } = useCreateActStore((state) => state);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);
        const name = data.get('name') as string;
        await create(name);
        close();
    };

    return (
        <Sheet.Root open={true} onOpenChange={close}>
            <Sheet.Portal>
                <Sheet.Overlay />
                <Sheet.Content>
                    <ActForm title="Create New Act" loading={loading} handleSubmit={handleSubmit} />
                </Sheet.Content>
            </Sheet.Portal>
        </Sheet.Root>
    );
}
