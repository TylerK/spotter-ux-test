import { Ref, forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
    label?: string;
    className?: string;
    hoverColor?: string;
    onClick: () => void;
};

const TailwindTextGray400 = '#9ca3af';

export const AddButton = forwardRef((props: Props, ref: Ref<HTMLButtonElement>) => {
    // Tailwind is not a fan of dynamic arbitrary colors
    // So we're gonna hack this a bit with state
    const [color, setColor] = useState<string>(TailwindTextGray400); // Maps to gray-400

    return (
        <button
            onClick={props.onClick}
            onPointerEnter={() => setColor(props.hoverColor || '#000000')}
            onPointerLeave={() => setColor(TailwindTextGray400)}
            className={twMerge('flex items-center gap-2', props.className)}
            style={{ color }}
            ref={ref}
        >
            <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="10.5" cy="11" r="9.5" stroke="currentColor" strokeWidth="2" />
                <path
                    d="M9.42045 14.8693V6.82386H11.4545V14.8693H9.42045ZM6.41477 11.8636V9.82955H14.4602V11.8636H6.41477Z"
                    fill="currentColor"
                />
            </svg>
            {props.label && <strong>{props.label}</strong>}
        </button>
    );
});
