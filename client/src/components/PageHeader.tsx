import { useSheetStore, SHEETS } from '../store/sheets';
import { AddButton } from './AddButton';

export function PageHeader() {
    const { open } = useSheetStore((state) => state);

    return (
        <>
            <header className="mb-6">
                <div className="flex items-baseline justify-between border-b-2 border-solid border-gray-200 pb-4">
                    <h1 className="text-4xl">Beat Sheet</h1>
                    <AddButton
                        label="CREATE ACT"
                        onClick={() => open({ sheet: SHEETS.CREATE_ACT })}
                    />
                </div>
            </header>
        </>
    );
}
