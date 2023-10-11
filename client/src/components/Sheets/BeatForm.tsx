import { Beat } from '../../store/types';

export function BeatForm({
    data,
    loading,
    handleSubmit,
    title,
}: {
    data?: Partial<Beat>;
    loading: boolean;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    title: string;
}) {
    return (
        <div className="flex max-w-xl flex-col gap-8">
            <h3 className="text-2xl font-bold">{title}</h3>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <fieldset className="flex flex-col gap-2">
                    <label className="Label" htmlFor="name">
                        Time
                    </label>
                    <input
                        className="appearance-none bg-none p-3"
                        id="time"
                        name="time"
                        type="text"
                        defaultValue={data?.time}
                        placeholder="Time, example: 00:30 - 00:40"
                    />
                </fieldset>
                <fieldset className="flex flex-col gap-2">
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
                <fieldset className="flex flex-col gap-2">
                    <label className="Label" htmlFor="name">
                        Scene Content
                    </label>
                    <textarea
                        className="appearance-none bg-none p-3"
                        id="content"
                        name="content"
                        rows={5}
                        defaultValue={data?.content}
                        placeholder="Write something epic here"
                    />
                </fieldset>
                <fieldset className="flex flex-col gap-2">
                    <label className="Label" htmlFor="name">
                        Scene Notes
                    </label>
                    <input
                        className="appearance-none bg-none p-3"
                        id="notes"
                        name="notes"
                        type="text"
                        defaultValue={data?.notes}
                        placeholder="Describe how the scene should feel"
                    />
                </fieldset>
                <fieldset className="flex flex-col gap-2">
                    <label className="Label" htmlFor="name">
                        Camera Angle
                    </label>
                    <input
                        className="appearance-none bg-none p-3"
                        id="camera_angle"
                        name="camera_angle"
                        type="text"
                        defaultValue={data?.cameraAngle}
                        placeholder="What camera angle to use?"
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
