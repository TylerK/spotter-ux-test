import * as Sheet from './Sheet';
import { useSheetStore } from '../../store/sheets';
import { useDeleteActStore } from '../../store/acts';

export function UpdateActSheet() {
    const { actId, close } = useSheetStore((state) => state);
    const { remove } = useDeleteActStore((state) => state);

    const handleDelete = async () => {
        await remove(actId);
        close();
    };

    return (
        <Sheet.Root open={true} onOpenChange={close}>
            <Sheet.Portal>
                <Sheet.Overlay />
                <Sheet.Content>
                    <div className="flex h-screen flex-col justify-center gap-8">
                        <img src="/cat.avif" alt="A cute cat" />
                        <div className="text-center">
                            <h1 className="text-3xl">Coming Soon</h1>
                            <p>
                                The API doesn't yet have an update route for changing existing Act
                                data
                            </p>
                            <p>Until then, enjoy this cat :)</p>
                        </div>
                        <button
                            className="bg-green-500 p-3 text-center text-white"
                            onClick={() => close()}
                        >
                            Close
                        </button>
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
