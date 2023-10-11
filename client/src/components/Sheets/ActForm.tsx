import { Act } from '../../store/types';

export function ActForm({
    data,
    loading,
    handleSubmit,
    title,
}: {
    data?: Partial<Act>;
    loading: boolean;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    title: string;
}) {
    return (
        <div className="flex max-w-xl flex-col gap-8">
            <h3 className="text-2xl font-bold">{title}</h3>
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
                        defaultValue={data?.name}
                        placeholder="Act name"
                    />
                </fieldset>
                {loading ? (
                    <button className="bg-gray-500 p-3 text-center text-white" disabled>
                        Loading...
                    </button>
                ) : (
                    <button className="bg-green-500 p-3 text-center text-white" type="submit">
                        Submit
                    </button>
                )}
            </form>
        </div>
    );
}
