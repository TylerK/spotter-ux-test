export function AddButton({ label, onClick }: { label: string; onClick: () => void }) {
    return (
        <button onClick={onClick} className="flex items-center gap-2">
            <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="10.5" cy="11" r="9.5" stroke="black" stroke-width="2" />
                <path
                    d="M9.42045 14.8693V6.82386H11.4545V14.8693H9.42045ZM6.41477 11.8636V9.82955H14.4602V11.8636H6.41477Z"
                    fill="currentColor"
                />
            </svg>
            <span>{label}</span>
        </button>
    );
}
