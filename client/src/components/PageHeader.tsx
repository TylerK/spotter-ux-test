import React, { useState } from 'react';
import { useCreateActStore } from '../store/acts';
import { AddButton } from './AddButton';
import { Dialog } from './Dialog';

export function PageHeader() {
    const [open, setOpen] = useState(false);
    const { create, loading } = useCreateActStore((state) => state);

    const handleClick = () => {
        setOpen(true);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);
        const name = data.get('name') as string;
        await create(name);
        setOpen(false);
    };

    return (
        <>
            <header className="mb-6">
                <div className="flex items-center justify-between border-b-2 border-solid border-gray-200 pb-4">
                    <h1 className="text-4xl">Beat Sheet</h1>
                    <Dialog.Root open={open} onOpenChange={setOpen}>
                        <Dialog.Trigger asChild>
                            <AddButton label="CREATE ACT" onClick={handleClick} />
                        </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay />
                            <Dialog.Content>
                                <div className="flex max-w-xl flex-col gap-8">
                                    <h3 className="text-2xl font-bold">Create a new act</h3>
                                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                        <fieldset className="flex flex-col gap-4">
                                            <label className="Label" htmlFor="name">
                                                Name
                                            </label>
                                            <input
                                                className="appearance-none bg-none p-3"
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Act name"
                                            />
                                        </fieldset>
                                        {loading ? (
                                            <button className="bg-gray-500 p-2 text-white" disabled>
                                                Loading...
                                            </button>
                                        ) : (
                                            <button
                                                className="bg-green-500 p-2 text-white"
                                                type="submit"
                                            >
                                                Create Act
                                            </button>
                                        )}
                                    </form>
                                </div>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                </div>
            </header>
        </>
    );
}
