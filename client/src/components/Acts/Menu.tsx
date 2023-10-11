import { SHEETS, useSheetStore } from '../../store/sheets';
import * as DropdownMenu from '../DropdownMenu';

export function ActMenu({ id }: { id: number }) {
    const { open } = useSheetStore((state) => state);

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className="flex h-6 w-8 items-center justify-center hover:bg-gray-800 hover:text-white">
                    <svg
                        width="24"
                        height="24"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content>
                    <DropdownMenu.Item asChild>
                        <button onClick={() => open({ sheet: SHEETS.CREATE_BEAT, actId: id })}>
                            Add Beat
                        </button>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item asChild>
                        <button
                            className="text-red-700"
                            onClick={() => open({ sheet: SHEETS.UPDATE_ACT, actId: id })}
                        >
                            Delete Act
                        </button>
                    </DropdownMenu.Item>
                    <DropdownMenu.Arrow />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}
