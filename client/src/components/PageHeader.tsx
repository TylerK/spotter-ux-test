import { AddButton } from './AddButton';

export function PageHeader() {
    return (
        <header>
            <div className="flex items-center justify-between border-b-2 border-solid border-gray-200 pb-4">
                <h1 className="text-4xl">Story Name here</h1>
                <AddButton label="Create Act" onClick={() => console.log('hi')} />
            </div>
        </header>
    );
}
